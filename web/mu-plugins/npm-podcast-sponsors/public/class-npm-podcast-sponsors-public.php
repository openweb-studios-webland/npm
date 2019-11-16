<?php

require_once plugin_dir_path(__DIR__) . 'partials/class-npm-podcast-sponsors-partial.php';

class NpmPodcastSponsorsPublic {

    public $sheetAge;
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

        // foreach (PRETTY_PODCAST_MAP as $key => $value) {
        //     array_push($this->podcastNames, $value);
		// }

    }

    public function render()
	{ ?>
		<ul>
			<?php foreach ($this->rows as $rows) : ?>
				<li>
					<?php
						$sponsorsList = new NpmPodcastSponsorsPartial($rows);
						$sponsorsList->render();
					?>
				</li>
			<?php endforeach; ?>
		</ul>



                <script>
                    notifications.errors = <?=json_encode($this->errors)?>;
                    notifications.notices = <?=json_encode($this->notices)?>;
                </script>

    <?php }
}
