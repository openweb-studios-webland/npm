<?php
require_once plugin_dir_path(__FILE__) . 'sponsor-list-view.php';
require_once plugin_dir_path(__FILE__) . 'constants.php';

class MainView
{

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

    public function __construct($rows, $leadAndSponsorBlurbMap)
    {
        $this->rows = $rows;
        $this->leadAndSponsorBlurbMap = $leadAndSponsorBlurbMap;

        foreach (PRETTY_PODCAST_MAP as $key => $value) {
            array_push($this->podcastNames, $value);
        }
    }

    public function render()
    {
        if (!empty($this->podcastNames)) {
            usort($this->podcastNames, function ($a, $b) {
                if (strcasecmp($a, $b) < 0) {
                    return -1;
                }
                return 1;
            });
        }
        ?>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
        <script>
            var podcastNames = <?=json_encode($this->podcastNames)?>;
            var prettyPodcastMap = <?=json_encode(PRETTY_PODCAST_MAP)?>;
            var lastUpdated = '<?=$this->sheetAge?>';
            /**
             * @param {number} hours
             */
            function formatHours(hours) {
                return (hours % 12) || 12;
            }

            /**
             *
             * @param {int} minute
             * @param {int} hours
             * @return {string}
             */
            function formatMins(minute, hours) {
                var mins = minute < 10 ? '0' + minute : minute;
                return hours >= 12 ? mins + 'pm' : mins + 'am';
            }

            /**
             *
             * @param {int} timestamp
             * @return {string}
             */
            function timestampToPrettyDate(timestamp) {
                var date = new Date(timestamp);
                var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                return months[date.getMonth()] + ' ' +
                    date.getDate() +
                    ' ' + date.getFullYear() +
                    ' ' + formatHours(date.getHours()) +
                    ':' + formatMins(date.getMinutes(), date.getHours());
            }
            console.info('Last updated: ', timestampToPrettyDate(parseInt(lastUpdated) * 1000));
        </script>
        <script src="<?=$this->jsUrl?>?v=20190619"></script>
        <link href="<?=$this->cssUrl?>?v=20191010" rel="stylesheet" media="all" />
        <div class="podcast-sponsors-wrapper">
            <div class="inner">
                <header>
                    <div id="products-header-white-logo">
                        <img src="<?=$this->logoUrl?>" width="100%">
                    </div>
                    <h1 class="header-title"><?=$this->postTitle?></h1>
                </header>
                <section class="filter-area">
                    <div class="overview-text">
                        <span>Welcome to National Public Media, the corporate sponsorship team for NPR. On this page, you'll find a list of the sponsors that support NPR and promo codes and offers from these sponsors. Using these promo codes helps support your favorite NPR programs. To learn more about National Public Media, visit our <a href="https://www.nationalpublicmedia.com/about-us/">about page</a>.</span>
                    </div>
                    <div>
                        <input type="text" id="filter" placeholder="Search by brand name, category or podcast">
                    </div>
                    <div class="filter-options">
                        <div>
                            <div>
                                <span>or</span>
                                <select id="podcast-list">
                                    <option value="">Filter by Podcast</option>
                                </select>
                            </div>
                        </div>
                        <div class="search-buttons">
                            <div class="offers-button-container">
                                <label>
                                    <input id="offer-filter" type="checkbox" />
                                    <span>Offers Only</span>
                                </label>
                            </div>
                            <div class="search-buttons__separator">&nbsp;</div>
                            <div class="reset-button-container">
                                <a id="reset">Reset Search</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="sheet-notifications">
                    <div class="sheet-notices">
                        <ul></ul>
                    </div>
                    <div class="sheet-errors">
                        <ul></ul>
                    </div>
                </section>
                <section id="results-area" class="loading">
                    <div id="loading-overlay">
                        <div class="loading-text">Loading...</div>
                    </div>
                    <div class="wrap">
                        <div class="row">
                            <ul id="card-list" class='post'>
                                <?php
$sponsorsList = new SponsorsListView($this->rows, $this->leadAndSponsorBlurbMap);
        $sponsorsList->render();
        ?>
                                <div id="results-message" class="hidden"></div>
                            </ul>
                            <div id="bottom-links-container" class="hidden">
                                <a href="#" id="load-more-results" class="">Show More Sponsors</a>
                                <a href="#" id="back-to-top" class="hidden">Back to Top</a>
                            </div>
                        </div>
                    </div>
                </section>
                <script>
                    notifications.errors = <?=json_encode($this->errors)?>;
                    notifications.notices = <?=json_encode($this->notices)?>;
                </script>
            </div>
        </div>
        <?php
}
}
