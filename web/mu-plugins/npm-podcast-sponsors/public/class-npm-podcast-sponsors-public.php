<?php

require_once plugin_dir_path(__DIR__) . 'partials/class-npm-podcast-sponsors-partial.php';
require_once plugin_dir_path(__DIR__) . 'includes/npm-podcast-sponsors-constants.php';

class NpmPodcastSponsorsPublic
{
    public $localSheetAge;
    public $logoUrl;
    public $jsUrl;
    public $cssUrl;
    public $postTitle;
    public $errors;
    public $notices;

    private $rows;
    private $leadAndSponsorBlurbMap;
    private $podcastNames = [];

    public function __construct($rows)
    {
        $this->rows = $rows;

        foreach (PRETTY_PODCAST_MAP as $key => $value) {
            array_push($this->podcastNames, $value);
        }
    }

    public function render()
    { ?>
		<div class="container">
			<?php for ($index = 0; $index < count($this->rows); $index++):
				$row = $this->rows[$index];

				if ($index < SPONSORS_PER_PAGE): ?>
					<div>
				<?php else: ?>
					<div class="hidden">
				<?php endif;
						$sponsorsList = new NpmPodcastSponsorsPartial($row);
						$sponsorsList->render(); ?>
					</div>
			<?php endfor; ?>
		</div>
   <?php }
}
