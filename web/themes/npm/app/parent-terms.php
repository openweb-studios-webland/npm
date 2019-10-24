<?php

// Auto-check parent terms when a child term is checked
function auto_check_parent_terms($post_id = null, $post = null)
{
    if (!$post || $post->post_type != 'product') {
        return;
    }

    // Get all associated terms
    $terms = wp_get_post_terms($post_id, 'platform');

    foreach ($terms as $term) {
        while ($term->parent != 0 && !has_term($term->parent, 'platform', $post)) {
            // Move up tree until level 0 terms
            wp_set_post_terms($post_id, array($term->parent), 'platform', true);
            $term = get_term($term->parent, 'platform');
        }
    }
}

add_action('save_post', 'auto_check_parent_terms');
