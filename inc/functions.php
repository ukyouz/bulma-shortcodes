<?php

require dirname(__FILE__) . '/grid.php';
require dirname(__FILE__) . '/elements.php';
require dirname(__FILE__) . '/components.php';

/**
* Adds the font awesome library and a custom css file to the editor for the shortcode menu.
*/
add_action('admin_enqueue_scripts', 'bulma_shortcodes_custom_css_enqueue');

function bulma_shortcodes_custom_css_enqueue() {
	wp_enqueue_style('bulma_shortcodes_font_awesome_external', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

	wp_enqueue_style('bulma_shortcodes_custom_css', plugins_url('css/bulma_shortcodes_custom_css.css', dirname(__FILE__)));
}

/**
* Trims added <p> tags from shortcodes for more consistent results.
*/
add_filter('the_content', 'bulma_shortcode_empty_paragraph_fix');

function bulma_shortcode_empty_paragraph_fix($content)
{
		$array = array(
				'<p>['    => '[',
				']</p>'   => ']',
				']<br />' => ']'
		);
		return strtr($content, $array);
}

/**
* Returns string as an array, split at '|' characters
*/
function bulma_split_at_bar($string)
{
		return explode('|', $string);
}
