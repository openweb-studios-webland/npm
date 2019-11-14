<?php

class NpmPodcastSponsorsUtilities
{
    /**
     * @param sting $value
     * @return string
     */
    public static function cleanValue($value)
    {
        $string = htmlspecialchars(trim(strip_tags($value), ' '));
        return str_replace('&amp;', '&', $string);
    }

    /**
     * @param array $array
     * @param string $currentKey
     * @param string $newKey
     * @param bool $replaceKey
     * @return array
     */
    public static function replaceKeys($array, $currentKey, $newKey, $replaceKey = true)
    {
        /**
         * If the value is not an array, then you have reached the deepest
         * point of the branch, so return the value
         */
        if (!is_array($array)) {
            return $array;
        }

        $newArray = [];

        foreach ($array as $key => $value) {
            // replace the key with the new key only if it is the old key
            $key = ($replaceKey && $key === $currentKey) ? $newKey : $key;

            // add the value with the recursive call
            $newArray[$key] = NpmPodcastSponsorsUtilities::replaceKeys($value, $currentKey, $newKey);
        }

        return $newArray;
    }
}
