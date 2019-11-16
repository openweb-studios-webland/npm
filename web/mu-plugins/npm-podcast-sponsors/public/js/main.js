var noDataMessage = 'There are no podcast sponsors at this time';
var noResultsMessage = 'Your search did not return any results';

// Analytics
var GA_ACCOUNT = 'UA-40245438-1';
var GA_CATEGORY_NAME = 'Podcast Sponsors';
var ga;
var UA = {};
var notifications = {
    errors: [],
    notices: [],
};
var resultsPerPage = 15;
var currentPageNumber = 1;
var backToTopThreshold = 15;

var uglyPodcastMap = {};
/* global prettyPodcastMap */
Object.keys(prettyPodcastMap).forEach(function(uglyKey, index) {
    uglyPodcastMap[prettyPodcastMap[uglyKey]] = uglyKey;
});

// util methods, jQuery alternatives

/**
 * @param {Element} el
 * @param {string} className
 * @return {boolean}
 * @private
 */
function _hasClass(el, className) {
    if (el.classList) {
        return el.classList.contains(className);
    } else {
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }
}

/**
 * @param {Element} el
 * @param {string} className
 * @private
 */
function _addClass(el, className) {
    if (el.classList) {
        el.classList.add(className);
    } else {
        el.className += ' ' + className;
    }
}

/**
 * @param {Element} el
 * @param {string} className
 * @private
 */
function _removeClass(el, className) {
    if (el.classList) {
        el.classList.remove(className);
    } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
}

/**
 * Fires a normal event.
 * @param {{category: string, action: string, [label]: string, [value]: number}} eventObj
 * @param {object} dimensions
 */
UA.eventDefault = function(eventObj, dimensions) {
    // Setting a value of 1 for all hits
    var value = 1;
    ga('sponsorsTracker.send', 'event', eventObj.category, eventObj.action, eventObj.label, value, dimensions);
};

/**
 * Hide or show results message
 * @param {string|null} message
 * @param {boolean} addOrRemove
 */
function toggleResultsMessage(message, addOrRemove) {
    // message is an optional argument to this function
    var resultsMessageDiv = document.querySelector('#results-message');
    if (message) {
        resultsMessageDiv.innerHTML = message;
    }
    if (addOrRemove) {
        _addClass(resultsMessageDiv, 'hidden');
    } else {
        _removeClass(resultsMessageDiv, 'hidden');
    }
}

/**
 * @param {HTMLElement} item
 * @param {RegExp} regexp
 */
function itemWordsMatchRegex(item, regexp) {
    var keywords = item.getAttribute('data-keywords');
    return regexp.test(keywords);
}

/**
 * Check if given item has offers if offers checkbox is checked
 * @param {HTMLElement} item
 */
function itemMatchesOffers(item) {
    var withOffersOnly = document.querySelector('#offer-filter').checked;
    return withOffersOnly ? _hasClass(item, 'has-offer') : true;
}

function loadMoreItems() {
    var start = (currentPageNumber * resultsPerPage);
    var end = start + resultsPerPage;
    filterItems(start, end);
    currentPageNumber += 1;
}

function hideAllContainers() {
    var cardContainers = document.querySelectorAll('.card-container');
    Array.prototype.forEach.call(cardContainers, function (cardContainer) {
        _addClass(cardContainer, 'hidden');
    });
}

/**
 *
 * @param {number} count
 * @param {number} end
 */
function toggleBottomLinks(count, end) {
    var bottomLinksContainer = document.querySelector('#bottom-links-container');
    var shouldShowLoadMore = count > end;
    var shouldShowBackToTop = count >= backToTopThreshold;
    var shouldShowContainer = shouldShowLoadMore || shouldShowBackToTop;

    if (shouldShowContainer) {
        _removeClass(bottomLinksContainer, 'hidden');
    } else {
        _addClass(bottomLinksContainer, 'hidden');
    }

    if (shouldShowLoadMore) {
        _removeClass(bottomLinksContainer.querySelector('#load-more-results'), 'hidden');
    } else {
        _addClass(bottomLinksContainer.querySelector('#load-more-results'), 'hidden');
    }

    if (shouldShowBackToTop) {
        _removeClass(bottomLinksContainer.querySelector('#back-to-top'), 'hidden');
    } else {
        _addClass(bottomLinksContainer.querySelector('#back-to-top'), 'hidden');
    }
}

/**
 * Show or hide an item based on three search criteria
 * @param {number} [start]
 * @param {number} [end]
 */
function filterItems(start, end) {
    start = start || 1;
    end = end || resultsPerPage;
    var selectedPodcastValue = String($('#podcast-list').val()).toLowerCase();
    var selectedPodcastRegex = new RegExp('\\b\\w*' + RegExp.escape(selectedPodcastValue || "") + '\\w*\\b', 'i');
    var typedWordRegex = new RegExp('\\b\\w*' + RegExp.escape($('#filter').val() || "") + '\\w*\\b', 'i');
    var cardContainers = document.querySelectorAll('.card-container');
    var foundMatches = false;

    var resultsCount = 0;
    Array.prototype.forEach.call(cardContainers, function (cardContainer, i) {
        var visibleItems = 0;
        var itemsInContainer = cardContainer.querySelectorAll('.item');
        Array.prototype.forEach.call(itemsInContainer, function (item, k) {
            var shouldDisplayItem = function() {
                return itemMatchesOffers(item)
                    && itemWordsMatchRegex(item, selectedPodcastRegex)
                    && itemWordsMatchRegex(item, typedWordRegex);
            };

            if (shouldDisplayItem()) {
                _removeClass(item, 'hidden');
                visibleItems += 1;
            } else {
                _addClass(item, 'hidden');
            }
        });
        var cardCount = cardContainer.querySelector('.card-count');
        cardCount.querySelector('.filtered').innerText = visibleItems;
        _removeClass(cardCount.querySelector('.filtered'), 'hidden');
        _addClass(cardCount.querySelector('.original'), 'hidden');
        if (!foundMatches && visibleItems > 0) {
            foundMatches = true;
        }

        if (visibleItems === 0) {
            _addClass(cardContainer, 'hidden');
        } else {
            resultsCount += 1;
            // unhide li.card-container only if its within the range of start - end
            if ((resultsCount > start || start === 1) && resultsCount <= end) {
                _removeClass(cardContainer, 'hidden');
            }
        }
    });
    toggleBottomLinks(resultsCount, end);
    _removeClass(document.querySelector('#results-area'), 'loading');
    toggleResultsMessage(noResultsMessage, foundMatches);
}

/**
 * @param {string} selectedPodcast
 */
function updateUrl(selectedPodcast) {
    if (selectedPodcast !== '') {
        var pageTitle = 'National Public Media ' + selectedPodcast + ' | National Public Media';
        document.title = pageTitle;
        if ('pushState' in history) {
            history.pushState(
                {
                    selectedPodcast: uglyPodcastMap[selectedPodcast],
                    pageTitle: pageTitle,
                },
                pageTitle,
                '/podcastsponsors/' + uglyPodcastMap[selectedPodcast] + '/'
            );
        }
    } else {
        return resetUrl();
    }
}

/**
 * From the good folks at stackoverflow
 * @see https://stackoverflow.com/questions/1397329/how-to-remove-the-hash-from-window-location-url-with-javascript-without-page-r/5298684#5298684
 */
function resetUrl() {
    var scrollV, scrollH, loc = window.location;
    if ('replaceState' in history) {
        var baseUrl = '';
        try {
            baseUrl = loc.pathname.split('/')[1];
        } catch(e) {
            baseUrl = 'podcastsponsors';
        }
        history.replaceState('', document.title, '/' + baseUrl + '/' + loc.search);
    } else {
        // Prevent scrolling by storing the page's current scroll offset
        scrollV = document.body.scrollTop;
        scrollH = document.body.scrollLeft;

        loc.hash = "";

        // Restore the scroll offset, should be flicker free
        document.body.scrollTop = scrollV;
        document.body.scrollLeft = scrollH;
    }
}

/**
 * URI args will now be of the http://example.com/podcastsponsors/planetmoney/
 * get uri param
 */
function getPathNameArgs() {
    var pathname = window.location.pathname;
    var args = [];
    try {
        args = pathname.split('/');
    } catch (e) {}
    return args;
}

/**
 * Get the podcast part of uri args
 * @return {string}
 */
function getPodcastFromUri() {
    var args = getPathNameArgs();
    if (args.length) {
        return args[2]; // '/podcastsponsors/1a/'
    }
    return '';
}

/**
 * Send a metric to GA
 * @param {string} action - 'Filter Search' or 'Link Click'
 * @param {string} label - podcast name
 * @param {object} customDimensions
 */
function sendGAEvent(action, label, customDimensions) {
    var event = {
        category: GA_CATEGORY_NAME,
        action: action,
        label: label,
    };
    UA.eventDefault(event, customDimensions);
}

/**
 * Use the ga object added to the page by gtag.js
 */
function setupGA() {
    window.ga = window.ga || function () {
        (ga.q = ga.q || []).push(arguments);
    };
    ga.l = +new Date();
    ga = window.ga;
    ga('create', GA_ACCOUNT, 'auto', { allowLinker: true, name: 'sponsorsTracker' });
    ga('require', 'linkid');
}

/**
 * Using this to override 'vertical-align: sub;' in safari only
 */
function detectSafari() {
    var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
    if (isSafari) {
        $('body').addClass('is-safari');
    }
}

/**
 * Display backend errors and notices
 */
function displayNotifications() {
    if (notifications.errors.length) {
        var errorsNode = document.querySelector('#sheet-notifications .sheet-errors ul');
        notifications.errors.forEach(function (errorText) {
            var li = document.createElement('li');
            li.innerHTML = errorText;
            errorsNode.appendChild(li);
        });
        $('.sheet-errors').toggleClass('visible', true);
    }
    if (notifications.notices.length) {
        var noticesNode = document.querySelector('#sheet-notifications .sheet-notices ul');
        notifications.notices.forEach(function (noticeText) {
            var li = document.createElement('li');
            li.innerHTML = noticeText;
            noticesNode.appendChild(li);
        });
        $('.sheet-notices').toggleClass('visible', true);
    }
}

/**
 *
 * @param {int} keycode
 * @return {boolean}
 */
function isValidKeycode(keycode) {
    return (keycode > 47 && keycode < 58) // number keys
        || keycode === 32
        || keycode === 13 // spacebar & return key(s) (if you want to allow carriage returns)
        || keycode === 8 // delete
        || (keycode > 64 && keycode < 91) // letter keys
        || (keycode > 95 && keycode < 112) // numpad keys
        || (keycode > 185 && keycode < 193) // ;=,-./` (in order)
        || (keycode > 218 && keycode < 223);   // [\]' (in order)
}

/**
 * Populate prodast dropdown
 */
function populatePodcastDropdown() {
    /* global podcastNames */
    podcastNames.forEach(function (podcastName) {
        var option = document.createElement('option');
        option.text = podcastName;
        option.value = podcastName;
        document.getElementById('podcast-list').appendChild(option);
    });

    // immediately filter by url on page load
    var selectedPodcast = getPodcastFromUri();
    if (selectedPodcast !== '') {
        var selectedPodcastValue = prettyPodcastMap[selectedPodcast];
        $('#podcast-list').val(selectedPodcastValue);
    }
}

/**
 * When #podcast-list changes
 */
function onChangeSelectedPodcast() {
    updateUrl($(this).val());
    currentPageNumber = 1;
    // hide all card containers, then filterItems
    hideAllContainers();
    filterItems();
    sendGAEvent('Filter Search', this.value, { dimension2: 'Podcast Dropdown' });
}

/**
 * When #offer-filter changes
 */
function onChangeOffersOnly() {
    _addClass(document.querySelector('#results-area'), 'loading');
    currentPageNumber = 1;
    filterItems();
    if (this.checked) {
        sendGAEvent('Filter Search', 'Offers Only', {});
    }
}

/**
 * When #reset is clicked
 */
function onReset() {
    currentPageNumber = 1;
    _addClass(document.querySelector('#results-area'), 'loading');
    // hide all card containers, then filterItems
    hideAllContainers();
    resetUrl();
    // reset drop-down
    document.querySelector('#podcast-list').selectedIndex = 0;
    //reset keyword textbox
    document.querySelector('#filter').value = '';
    // uncheck the offers box
    document.querySelector('#offer-filter').checked = false;
    filterItems();
}

/**
 * When the back or forward browser buttons are clicked
 */
function onPopState(event) {
    var state = event.state;
    var podcastValue = '';
    if (state && state.selectedPodcast) {
        podcastValue = prettyPodcastMap[state.selectedPodcast];
        document.title = state.pageTitle;
    } else {
        podcastValue = '';
        document.title = 'National Public Media Podcast Sponsors | National Public Media';
    }
    $('#podcast-list').val(podcastValue);
    currentPageNumber = 1;
    // hide all card containers, then filterItems
    hideAllContainers();
    filterItems();
}

/**
 * @param {string} s
 */
function regexEscape(s) {
    var escapedString = s;
    escapedString = escapedString.replace(/\./g, '');
    escapedString = escapedString.replace(/!/g, '');
    escapedString = escapedString.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    return escapedString;
}

$(document).ready(function() {
    RegExp.escape = function(s) {
        return regexEscape(s);
    };
    // populate podcast dropdown or show no result message
    if (podcastNames.length) {
        populatePodcastDropdown();
        filterItems();
    } else {
        toggleResultsMessage(noDataMessage, false);
    }

    setupGA();
    // Filter by keyword search
    var timeout = null;
    document.querySelector('#filter').addEventListener('keyup', function (e) {
        // intentionally not making this functionality contigent on isValidKeycode because that could
        // get messy. Using it to avoid a bad experience with the loader showing up at unnecessary times
        var resultsArea = document.querySelector('#results-area');
        if (!_hasClass(resultsArea,'loading') && isValidKeycode(e.keyCode)) {
            _addClass(resultsArea, 'loading');
        }
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            currentPageNumber = 1;
            filterItems();
        }, 300);
    });
    // filter on drop-down change
    document.querySelector('#podcast-list').addEventListener('change', function () {
        onChangeSelectedPodcast.call(this);
    });
    // filter by offers
    document.querySelector('#offer-filter').addEventListener('change', function () {
        onChangeOffersOnly.call(this);
    });
    document.querySelector('#reset').addEventListener('click', function () {
        onReset();
    });
    document.querySelector('#load-more-results').addEventListener('click', function (e) {
        e.preventDefault();
        loadMoreItems();
    });
    document.querySelector('#back-to-top').addEventListener('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 200);
    });
    window.onpopstate = function (event){
        return onPopState(event);
    };
    $('.podcast-link, .promo-text-link').on('click', function () {
        var $sponsorCard = $(this).parents('.sponsor-card');
        sendGAEvent('Link Click', $sponsorCard.data('podcastname'), { dimension1: $sponsorCard.data('sponsorname') });
    });
    $('.card-toggle').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.card-container').toggleClass('isExpanded');
        $(this).toggleClass('down');
    });

    // display notifications that may be coming from the backend
    displayNotifications();
    detectSafari();
});
