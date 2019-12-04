<?php

require_once plugin_dir_path(__FILE__) . 'class-npm-podcast-sponsors-utilities.php';

const MAX_SHEET_AGE = 60 * 30; // 30 minutes
const REMOTE_SHEET_ID = '1qXS-NVRzDh2o398w7279IlDPFtOCgPR9kH3aCjZJeoA';
const API_URL = 'https://content-sheets.googleapis.com/v4/spreadsheets';
const API_KEY = 'AIzaSyAgNxoaHzjVjIkCEAdwNvRYCKR0PTU4HmA';
const RANGE = 'A:N';

class NpmPodcastSponsors
{
    private $params = [
        'valueRenderOption=FORMATTED_VALUE',
        'dateTimeRenderOption=FORMATTED_STRING',
        'majorDimension=ROWS',
        'key=' . API_KEY,
    ];
    private $rows = [];
    private $queryParams;
    private $remoteSheetUrl;
    private $localSheetPath;
    private $localSheetAge;
    private $isOlderThanThreshold;
    private $forceRefresh;

    public function __construct()
    {
        $this->queryParams = join('&', $this->params);
        $this->remoteSheetUrl = API_URL . '/' . REMOTE_SHEET_ID . '/values/' . RANGE . '?' . $this->queryParams;
        $this->localSheetPath = WP_CONTENT_DIR . '/wp-content/uploads/podcast-sponsors.json';
        $this->localSheetAge = filemtime($this->localSheetPath);
        $this->isOlderThanThreshold = time() - $this->localSheetAge >= MAX_SHEET_AGE;
        $this->forceRefresh = isset($_GET['refreshFeed']) && $_GET['refreshFeed'] == true && is_user_logged_in();
    }

    /**
     * @throws
     * @return array
     */
    public function getData()
    {
        // Update the local feed on disk from remote if local file is older than MAX_SHEET_AGE or if refreshFeed is true
        ($this->isOlderThanThreshold || $this->forceRefresh) ? $this->getRemoteData() : $this->getLocalData();

		$this->rows = $this->cleanRows($this->rows);
		$this->rows = $this->sortByLeadSponsors($this->rows);

        if (isset($_GET['refreshFeed']) && $_GET['refreshFeed'] == true && !is_user_logged_in()) {
            error_log('You must be logged in to perform that action.');
            die('You must be logged in to perform that action.');
		}

        return $this->rows;
    }

    /**
     * Get remote JSON feed
     * Write contents to local file
     */
    private function getRemoteData()
    {
        // Get remote JSON feed
        $curlHandle = curl_init($this->remoteSheetUrl);
        curl_setopt($curlHandle, CURLOPT_RETURNTRANSFER, true);
        $remoteSheetData = curl_exec($curlHandle);
        curl_close($curlHandle);
        $remoteJsonFeed = json_decode($remoteSheetData);

        $this->rows = $this->addHeaderRows($remoteJsonFeed->{'values'});
        $this->rows = $this->sortBySponsorNames($this->rows);
        $this->rows = (array) $this->rows;

        // Set local sheet age
        $this->localSheetAge = time();

        // Write contents to local file
        try {
            $fh = fopen($this->localSheetPath, 'w') or die('Unable to open "' . $this->localSheetPath . '" for writing.');
            fwrite($fh, json_encode($this->rows));
            fclose($fh);
        } catch (Exception $e) {
            error_log('Error writing to local feed "' . $e->getMessage() . '".');
        }
    }

    // Read contents from local file
    private function getLocalData()
    {
        $handle = fopen($this->localSheetPath, 'r');

        if ($handle) {
            $feedData = fread($handle, filesize($this->localSheetPath));
            $jsonFeed = json_decode($feedData, true);
            $this->rows = $jsonFeed;
        } else {
            error_log('Could not open local sheet file.');
            die('Could not open local sheet file.');
        }

        $this->localSheetAge = filemtime($this->localSheetPath);
    }

    /**
     * Remove header rows
     * Replace numeric keys with header rows
     * @param array $rows
     */
    private function addHeaderRows($rows)
    {
        // Remove header rows
        $headerRows = $rows[0];

        // Replace numeric keys with headers
        foreach ($headerRows as $key => $value) {
            $rows = NpmPodcastSponsorsUtilities::replaceKeys($rows, $key, $value, false);
        }

        return $rows;
    }

    /**
     * Remove incomplete and unverified rows
     * @param array $rows
     * @return array
     */
    private function cleanRows($rows)
    {
        $completeRows = [];

        foreach ($rows as $value) {
            $sponsorName = $value['sponsorName'];

            if (!empty($sponsorName) && $this->isValidSponsor(
                $value['verified'],
                $value['complete'],
                $value['start'],
                $value['expiration'])
            ) {
				$value = $this->addSchemeToUrls($value);

                if (!array_key_exists($sponsorName, $completeRows)) {
                    $completeRows[$sponsorName] = [];
                }

                array_push($completeRows[$sponsorName], $value);
            }
        }

        return $completeRows;
	}

	/**
     * Add scheme to URLs
     * @param array $value
     * @return array
     */
	private function addSchemeToUrls($value) {
		$value['sponsorWebsite'] = NpmPodcastSponsorsUtilities::addScheme($value['sponsorWebsite']);
		$value['podcastUrl'] = NpmPodcastSponsorsUtilities::addScheme($value['podcastUrl']);
		$value['promoUrl'] = NpmPodcastSponsorsUtilities::addScheme($value['promoUrl']);

		return $value;
	}

    /**
     * Sort alphabetically by sponsorMame
     * @param array $rows
     * @return array
     */
    private function sortBySponsorNames($rows)
    {
        usort($rows, function ($a, $b) {
            return (strcasecmp($a['sponsorName'], $b['sponsorName']) < 0) ? -1 : 1;
        });

        return $rows;
    }

    /**
     * Takes raw output from the excel sheet and Group the sorted list to have lead sponsors at the top
     * Move lead rows to the top while maintaining alphabetical sort
     * @param array $rows
     * @return array
     */
    private function sortByLeadSponsors($rows)
    {
        $leadSponsors = [];
        $otherSponsors = [];

        foreach ($rows as $key => $value) {
            $isLead = false;
            $sortedRow = [];

            foreach ($value as $value) {
                if (isset($value['lead']) && $value['lead'] === 'yes') {
                    $isLead = true;
                    array_unshift($sortedRow, $value);
                } else {
                    array_push($sortedRow, $value);
                }
            }

            $isLead ? $leadSponsors[$key] = $sortedRow : $otherSponsors[$key] = $sortedRow;
        }

        return array_merge($leadSponsors, $otherSponsors);
    }

    /**
     * @param string $isVerified
     * @param string $isComplete
     * @param string $start
     * @param string $expiration
     * @return bool
     */
    private function isValidSponsor($isVerified, $isComplete, $start, $expiration)
    {
        if (empty($start) || empty($expiration)) {
            return false;
        }

        try {
            $start = new DateTime($start);
            $expiration = new DateTime($expiration);
        } catch (Throwable $e) {
            return false;
        }

        $today = new DateTime();
        $isInRange = $today >= $start && $today <= $expiration;
        $isVerifiedAndComplete = NpmPodcastSponsorsUtilities::cleanValue($isVerified) === 'yes' && NpmPodcastSponsorsUtilities::cleanValue($isComplete) === 'yes';

        // When logged in you should see everything regardless of start/end, verified, or complete status
        return ($isInRange && $isVerifiedAndComplete) || is_user_logged_in();
    }
}
