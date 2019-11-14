=== Podcast Sponsors Plugin ===
Contributors: NPMCreative
Tested up to: 4.9.8
Stable tag: 4.9.8

A plugin for the podcast sponsors page. It renders https://nationalpublicmedia.com/podcastsponsors.

== Description ==

This plugin reads data from a remote Google Sheet, saves it in a local file in JSON format and displays that data on https://www.nationalpublicmedia.com/podcastsponsors.
The local JSON file is located in `wp-content/uploads/promo-codes.json`. Data is read from this file by default unless the file is older than 30 minutes, then the script fetches the remote file and repopulates the local file.
You can also force the local file to be repopulated by adding a url parameter `refreshFeed=1`. You must be logged in to do that.

== Installation ==

1. Upload the plugin to the `wp-content/plugins/` directory
2. Activate the plugin
3. In WP admin under 'Pages', create a page for every key in includes/constants.php PRETTY_PODCAST_MAP. These pages should have the url /podcastsponsors/`key` so they shold be classified as children of /podcastsponsors. If you're using a special WP template for /podcastsponsors, make sure it's also applied to each of these child pages.
4. The first time you install the plugin, you'll need to visit /podcastsponsors?refreshFeed=1 to make sure the local JSON cache file is create. After that you can access the page without the `refreshFeed=1`
