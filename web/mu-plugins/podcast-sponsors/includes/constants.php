<?php

const MAX_SHEET_AGE = 60 * 30; // 30 minutes
const REMOTE_SHEET_ID = '1qXS-NVRzDh2o398w7279IlDPFtOCgPR9kH3aCjZJeoA';
const API_URL = 'https://content-sheets.googleapis.com/v4/spreadsheets';
const API_KEY = 'AIzaSyAgNxoaHzjVjIkCEAdwNvRYCKR0PTU4HmA';
const RANGE = 'A:N';

// Column indices as they appear in the spreadsheet
// const COLUMN_INDICES = [
//     'sponsorName' => 0,
//     'sponsorDescription' => 1,
//     'sponsorWebsite' => 2,
//     'hasOffer' => 3,
//     'lead' => 4,
//     'complete' => 5,
//     'verified' => 6,
//     'podcast' => 7,
//     'podcastUrl' => 8,
//     'promoCopy' => 9,
//     'promoUrl' => 10,
//     'searchKeywords' => 11,
//     'start' => 12,
//     'expiration' => 13
// ];

const PRETTY_PODCAST_MAP = [
    '1a' => '1A',
    'allsongsconsidered' => 'All Songs Considered',
    'askmeanother' => 'Ask Me Another',
    'believed' => 'Believed',
    'bullseye' => 'Bullseye',
    'cartalk' => 'Car Talk',
    'codeswitch' => 'Code Switch',
    'embedded' => 'Embedded',
    'freshair' => 'Fresh Air',
    'hiddenbrain' => 'Hidden Brain',
    'howibuiltthis' => 'How I Built This',
    'invisibilia' => 'Invisibilia',
    'itsbeenaminutewithsamsanders' => 'It\'s Been a Minute with Sam Sanders',
    'latinousa' => 'Latino USA',
    'nprpolitics' => 'NPR Politics',
    'planetmoney' => 'Planet Money',
    'popculturehappyhour' => 'Pop Culture Happy Hour',
    'roughtranslation' => 'Rough Translation',
    'tedradiohour' => 'TED Radio Hour',
    'theindicator' => 'The Indicator',
    'throughline' => 'Throughline',
    'upfirst' => 'Up First',
    'waitwaitdonttellme' => 'Wait Wait... Don\'t Tell Me!',
    'whitelies' => 'White Lies',
    'wowintheworld' => 'Wow In The World',
    'lifekit' => 'Life Kit',
    'radioambulante' => 'Radio Ambulante',
    'shortwave' => 'Shortwave',
    'storycorps' => 'StoryCorps',
];
