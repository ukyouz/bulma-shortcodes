<?php
/**
 * Contains:
 *  * Button
 *  *
 */

/**
* Creates the tag <a class="button" role="button"></a>
*/

function bulma_sButton($atts, $content = null)
{
    extract(shortcode_atts(array('link' => '#', 'class' => 'is-primary'), $atts));
    if (! empty($atts['icon'])):
    return '<a class="button ' . $class . '" href="'.$link.'" role="button"><span class="icon"><i class="fa fa-' . $atts['icon'] . '"></i></span><span>' . do_shortcode($content) . '</span></a>'; else:
    return '<a class="button ' . $class . '" href="'.$link.'" role="button"><span>' . do_shortcode($content) . '</span></a>';
    endif;
}
