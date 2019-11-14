<?php
require_once(plugin_dir_path(__FILE__) . 'constants.php');

class SponsorsListView {
    private $rows;
    private $leadAndSponsorBlurbMap;

    /**
     * SponsorsList constructor.
     * @param array $rows
     * @param array $leadAndSponsorBlurbMap
     */
    function __construct($rows, $leadAndSponsorBlurbMap)
    {
        $this->rows = $rows;
        $this->leadAndSponsorBlurbMap = $leadAndSponsorBlurbMap;
    }

    function render()
    {
        $iterationCount = 1;
        $isFirstRow = true;
        $numRows = count($this->rows);
        foreach ($this->rows as $key => $value) {
            $expandedClass = $isFirstRow || $numRows === 1 ? ' isExpanded' : '';
            $isFirstRow = false;?>
<li class="card-container hidden<?=$expandedClass?>">
    <div class="card-teaser">
        <div class="card-teaser-inner">
            <div class="card-teaser__heading">
<?php
            if ($this->leadAndSponsorBlurbMap[$key][0] == 'yes') {?>
                <div class="card-award-icon" title="Lead Sponsor"></div>
<?php
            }?>
                <div class="card-title">
<?php
            if (!empty($this->leadAndSponsorBlurbMap[$key][2])) {
                $sponsorWebsite = $this->addScheme($this->leadAndSponsorBlurbMap[$key][2]);?>
                    <a class="promo-text-link" href="<?=$sponsorWebsite?>" target="_blank"><?=$key?></a>
<?php
            } else {
                echo $key;
            }?>
                </div>
                <div class="card-count">
                    <span class="original"><?=count($value)?></span>
                    <span class="filtered hidden"><?=count($value)?></span>
                </div>
                <div class="card-toggle<?=!empty($expandedClass) ? ' down' : ''?>"><a href="#"></a></div>
            </div>
            <div class="card-teaser__blurb<?=empty($this->leadAndSponsorBlurbMap[$key][1]) ? ' hidden' : ''?>"><?=$this->leadAndSponsorBlurbMap[$key][1]?></div>
        </div>
    </div>
    <div class="card-body">
        <div class="support-language">Supports</div>
        <ul>
<?php
            for ($k = 0; $k < count($value); $k++) {
                $row = $value[$k];
                $sponsorName = $this->cleanValue($row[COLUMN_INDICES['sponsorName']]);
                $podcastName = $this->cleanValue($row[COLUMN_INDICES['podcast']]);
                $classes = $this->getItemClasses(
                    $row[COLUMN_INDICES['verified']],
                    $row[COLUMN_INDICES['complete']],
                    $row[COLUMN_INDICES['hasOffer']]
                );
                $keywords = strtolower($this->cleanValue($row[COLUMN_INDICES['sponsorName']]) . ' ' . $this->cleanValue($row[COLUMN_INDICES['promoCopy']]) . ' ' . $this->cleanValue($row[COLUMN_INDICES['searchKeywords']]) . $podcastName);
                $podcastUrl = $this->addScheme($this->cleanValue($row[COLUMN_INDICES['podcastUrl']]));
                $promoUrl = $this->addScheme($this->cleanValue($row[COLUMN_INDICES['promoUrl']]));?>
            <li class="<?=$classes?>"
                data-keywords="<?=$keywords?>">
                <div class="podcast-entry"
                     data-sponsorname="<?=$sponsorName?>"
                     data-podcastname="<?=$this->cleanValue($podcastName)?>">
                    <div class="podcast-entry__podcast-link-container">
                        <a class="podcast-link" href="<?=$podcastUrl?>" target="_blank"><?=$this->cleanValue($podcastName)?></a>
                    </div>
                    <div class="podcast-entry__copy"><a href="<?=$promoUrl?>"><?=$this->cleanValue($row[COLUMN_INDICES['promoCopy']])?></a></div>
                    <div class="podcast-entry__expiration">ENDS&nbsp;<?=$this->cleanValue($row[COLUMN_INDICES['expiration']])?></div>
                </div>
            </li>
<?php
            }?>
        </ul>
    </div>
</li>
<?php
            $iterationCount += 1;
        } // end foreach
    } // end render()

    /**
     * @param string $verified
     * @param string $complete
     * @param string $hasOffer
     * @return string
     */
    private function getItemClasses($verified, $complete, $hasOffer)
    {
        $hasOfferClass = $this->cleanValue($hasOffer) == 'yes' ? 'has-offer' : 'no-offer';
        $unverifiedClass = $this->cleanValue($verified) != 'yes' ? 'unverified' : '';
        $incompleteClass = $this->cleanValue($complete) != 'yes' ? 'incomplete' : '';
        $classArray = ['item', 'hidden', $hasOfferClass, $incompleteClass, $unverifiedClass];
        return implode(' ',
            array_filter($classArray, function ($value) {
                return !empty($value);
            })
        );
    }

    private function addScheme($url, $scheme = 'http://')
    {
        return parse_url($url, PHP_URL_SCHEME) === null ?
            $scheme . $url : $url;
    }

    /**
     * @todo: should be in utils
     * @param $value
     * @return string
     */
    private function cleanValue($value)
    {
        $string = htmlspecialchars(trim(strip_tags($value), ' '));
        return str_replace('&amp;', '&', $string);
    }
} // end class
