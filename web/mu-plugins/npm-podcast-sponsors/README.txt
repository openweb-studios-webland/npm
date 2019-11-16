=== NPM Podcast Sponsors ===
Contributors: n/a
Requires at least: 3.0.1
Tested up to: 5.2
Stable tag: 5.2
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

A plugin to fetch, generate, and format NPM podcast sponsors data.

== Description ==
This plugin reads data from a remote Google Sheet, saves it in a local file in JSON format, and returns the data. Data is read from the local file unless it is older than 30 minutes. If outdated, the plugin will fetch the remote Goggle Sheet and rewrite the local file. If logged in, you can force the local file to be repopulated by adding the URL parameter `refreshFeed=1`.

== Installation ==
1. Call the npm_podcast_sponsors() function.
2. Do whatever you want with the data.
