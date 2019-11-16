<?php

class NpmPodcastSponsorsPartial
{
    private $rows;

    /**
     * SponsorsList constructor.
     * @param array $rows
     * @param array $leadAndSponsorBlurbMap
     */
    public function __construct($rows)
    {
        $this->rows = $rows;
    }

    public function render()
    { ?>
		<?php $firstRow = $this->rows[0]; ?>

		<div style="border: 2px solid red; margin-bottom: 20px;">
			<div class="sponsor-meta">
				<?php if ($firstRow['lead'] === 'yes') : ?>
					<div class="sponsor-meta-lead">
						Lead
					</div>
				<?php endif; ?>

				<div class="sponsor-meta-heading">
					<h2>
						<?php echo $firstRow['sponsorName']; ?>
					</h2>
				</div>

				<div class="sponsor-meta-button">
					<button>
						<?php if (count($this->rows) > 1) : ?>
							<?php echo count($this->rows); ?> Codes
						<?php else : ?>
							<?php echo count($this->rows); ?> Code
						<?php endif; ?>
					</button>
				</div>
			</div>

			<div class="sponsor-text">
				<?php echo $firstRow['sponsorDescription']; ?>
			</div>

			<div class="sponsor-supports">
				<p class="sponsor-supports-heading">
					Supports
				</p>

				<ul class="sponsor-supports-list">
					<?php for ($index = 0; $index < count($this->rows); $index++) :
						$row = $this->rows[$index]; ?>
						<li>
							<div class="sponsor-promo-code">
								<div class="sponsor-promo-code-podcast">
									<a href="<?php echo $row['podcastUrl']; ?>">
										<?php echo $row['podcast']; ?>
									</a>
								</div>

								<div class="sponsor-promo-code-copy">
									<a href="<?php echo $row['promoUrl']; ?>">
										<?php echo $row['promoCopy']; ?>
									</a>
								</div>

								<div class="sponsor-promo-code-expiration">
									Ends <?php echo $row['expiration']; ?>
								</div>
							</div>
						</li>
					<?php endfor; ?>
				</ul>
			</div>
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
