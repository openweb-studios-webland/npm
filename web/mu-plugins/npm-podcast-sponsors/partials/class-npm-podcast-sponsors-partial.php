<?php

class NpmPodcastSponsorsPartial
{
    private $rows;

    /**
     * SponsorsList constructor.
     * @param array $rows
     * @param array $leadAndSponsorBlurbMap
     */
    public function __construct($row)
    {
        $this->row = $row;
        // $this->leadAndSponsorBlurbMap = $leadAndSponsorBlurbMap;
    }

    public function render()
    { ?>
		<h2 class="heading-4 mb-10">
			<?php echo $this->row['sponsorName']; ?>
		</h2>

		<div class="text border-b border-gray-border mb-20 pb-20">
			<?php echo $this->row['sponsorDescription']; ?>
		</div>
	<?php }

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
