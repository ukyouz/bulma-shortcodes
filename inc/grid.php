<?php
/**
 * Contains:
 *  * Columns
 *  * Column
 */

/**
 * Creates the tag <div class="columns"></div>
*/

function bulma_sColumns($atts, $content = null)
{
    extract(shortcode_atts(array(), $atts));
    return '<div class="columns">'.do_shortcode($content).'</div>';
}

/**
 * Creates the tag <div class="column"></div>
*/

function bulma_sColumn($atts, $content = null)
{
    extract(shortcode_atts(array('type' => ''), $atts));
    return '<div class="column content '.$type.'">'.do_shortcode($content).'</div>';
}
