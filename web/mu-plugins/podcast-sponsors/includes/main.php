<?php

require_once plugin_dir_path(__FILE__) . 'constants.php';
require_once plugin_dir_path(__FILE__) . 'utilities.php';

class Main
{
    private $params = [
        'valueRenderOption=FORMATTED_VALUE',
        'dateTimeRenderOption=FORMATTED_STRING',
        'majorDimension=ROWS',
        'key=' . API_KEY,
    ];
    private $leadAndSponsorBlurbMap = [];
    private $errors = [];
    private $notices = [];
    private $rows = [];
    private $queryParams;
    private $remoteSheetUrl;
    private $localSheetPath;
    private $localSheetAge;
    private $olderThanThreshold;
    private $forceRefresh;

    public function __construct()
    {
        $this->queryParams = join('&', $this->params);
        $this->remoteSheetUrl = API_URL . '/' . REMOTE_SHEET_ID . '/values/' . RANGE . '?' . $this->queryParams;
        $this->localSheetPath = plugin_dir_path(__DIR__) . '/public/promo-codes.json';
        $this->localSheetAge = filemtime($this->localSheetPath);
        $this->olderThanThreshold = time() - $this->localSheetAge >= MAX_SHEET_AGE;
        $this->forceRefresh = isset($_GET['refreshFeed']) && $_GET['refreshFeed'] == true && is_user_logged_in();
    }

    public function initializeData()
    {
        // Update the local feed on disk from remote if local file is older than MAX_SHEET_AGE or if refreshFeed is true
        if ($this->olderThanThreshold || $this->forceRefresh) {
            // Get remost JSON feed
            $curlHandle = curl_init($this->remoteSheetUrl);
            curl_setopt($curlHandle, CURLOPT_RETURNTRANSFER, true);
            $remoteSheetData = curl_exec($curlHandle);
            curl_close($curlHandle);
            $remoteJsonFeed = json_decode($remoteSheetData);

            $this->rows = $this->removeHeaderRows($remoteJsonFeed->{'values'});
            $this->rows = $this->sortBySponsorName($this->rows);
            $this->rows = (array) $this->rows;

            $this->createSponsorMap($this->rows, false);
            $this->rows = $this->sortByLeadSponsor($this->rows);
            $this->localSheetAge = time();

            // write contents to local file
            try {
                $fh = fopen($this->localSheetPath, 'w') or die('Unable to open "' . $this->localSheetPath . '" for writing');
                fwrite($fh, json_encode($this->rows));
                fclose($fh);
            } catch (Exception $e) {
                error_log('Error writing to local feed "' . $e->getMessage() . '"', 0);
            }
        } else {
            // read from local file
            $handle = fopen($this->localSheetPath, 'r');

            if ($handle) {
                $feedData = fread($handle, filesize($this->localSheetPath));
                $jsonFeed = json_decode($feedData, true);

                $this->rows = $jsonFeed;
                $this->createSponsorMap($this->rows, true);
            } else {
                // @todo: should return a 500 here. The rest of the code wont work if this fails
                error_log('Could not open local sheet file', 0);
            }

            $this->localSheetAge = filemtime($this->localSheetPath);
        }

        $this->rows = $this->cleanRows($this->rows);

        if (isset($_GET['refreshFeed']) && $_GET['refreshFeed'] == 'true' && !is_user_logged_in()) {
            array_push($errors, 'You must be logged in to perform that action');
        }

        echo '<pre>';
        print_r($this->rows);die();

        return $this;
    }

    /**
     * Remove incomplete and unverified rows
     * @param array $rows
     * @return array
     */
    private function cleanRows($rows)
    {
        $cleanRows = [];

        foreach ($rows as $key => $value) {
            foreach ($value as $value) {
                if ($this->displayRow($value['verified'],
                    $value['complete'],
                    $value['start'],
                    $value['expiration'])) {

                    if (empty($cleanRows[$key])) {
                        $cleanRows[$key] = [];
                    }

                    array_push($cleanRows[$key], $value);
                }
            }
        }

        return $cleanRows;
    }

    /**
     * Create a map keyed on sponsorMame with an array containing:
     * 0 Whether the sponsor is a lead
     * 1 The sponsorDescription
     * @param array $rows
     * @param bool $grouped
     */
    private function createSponsorMap($rows, $grouped)
    {
        if (!empty($this->leadAndSponsorBlurbMap)) {
            return;
        }

        if ($grouped) {
            foreach ($rows as $value) {
                $this->addToSponsorMap($value);
            }
        } else {
            $this->addToSponsorMap($rows);
        }
    }

    /**
     * Add lead, description, and website to map
     * @param array $rows
     */
    private function addToSponsorMap($rows)
    {
        foreach ($rows as $value) {
            $sponsor = $value['sponsorName'];
            $this->leadAndSponsorBlurbMap[$sponsor] = [];
            $this->leadAndSponsorBlurbMap[$sponsor]['lead'] = $value['lead'] == 'yes' ? 'yes' : 'no';
            $this->leadAndSponsorBlurbMap[$sponsor]['description'] = !empty($value['sponsorDescription']) ? $value['sponsorDescription'] : '';
            $this->leadAndSponsorBlurbMap[$sponsor]['website'] = !empty($value['sponsorWebsite']) ? $value['sponsorWebsite'] : '';
        }
    }

    /**
     * Remove header rows
     * Replace numeric keys with header rows
     * @param array $rows
     */
    private function removeHeaderRows($rows)
    {
        // Remove header rows
        $headerRows = $rows[0];
        array_shift($rows);

        // Replace numeric keys with headers
        foreach ($headerRows as $key => $value) {
            $rows = Utilities::replaceKeys($rows, $key, $value, false);
        }

        return $rows;
    }

    /**
     * Sort alphabetically by sponsorMame
     * @param array $rows
     * @return array
     */
    private function sortBySponsorName($rows)
    {
        usort($rows, function ($a, $b) {
            if (strcasecmp($a['sponsorName'], $b['sponsorName']) < 0) {
                return -1;
            }

            return 1;
        });

        return $rows;
    }

    /**
     * Takes raw output from the excel sheet and Group the sorted list to have lead sponsors at the top
     * Move 'lead' rows to the top, maintaining alphabetical sort
     * Ignore rows with no sponsorName
     * @param array $rows
     * @return array
     */
    private function sortByLeadSponsor($rows)
    {
        $leads = [];
        $other = [];

        foreach ($rows as $key => $value) {
            $sponsor = $value['sponsorName'];
            // If this row is marked as lead or if in previous iterations we've seen a lead entry for this sponsor
            if (empty($sponsor)) {
                continue;
            }

            if (isset($this->leadAndSponsorBlurbMap[$sponsor][0])) {
                if (!isset($leads[$sponsor])) {
                    $leads[$sponsor] = [];
                }

                array_push($leads[$sponsor], $value);
            } else {
                if (!isset($other[$sponsor])) {
                    $other[$sponsor] = [];
                }

                array_push($other[$sponsor], $value);
            }
        }

        return array_merge($leads, $other);
    }

    /**
     * @param string $verified
     * @param string $complete
     * @param string $start
     * @param string $expiration
     * @throws
     * @return bool
     */
    private function displayRow($verified, $complete, $start, $expiration)
    {
        if (empty($start) || empty($expiration)) {
            return false;
        }

        try {
            $startDate = new DateTime($start);
            $endDate = new DateTime($expiration);
        } catch (Throwable $e) {
            return false;
        }

        $today = new DateTime();
        $withinRange = $today >= $startDate && $today <= $endDate;
        $verifiedAndComplete = Utilities::cleanValue($verified) == 'yes' && Utilities::cleanValue($complete) == 'yes';

        // When logged in you should see everything regardless of start/end, verified, or complete status.
        return ($withinRange && $verifiedAndComplete) || is_user_logged_in();
    }
}
