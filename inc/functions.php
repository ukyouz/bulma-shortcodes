<?php

require dirname(__FILE__) . '/grid.php';
require dirname(__FILE__) . '/elements.php';
require dirname(__FILE__) . '/components.php';

/**
* Adds the font-awesome library too the editor for the shortcode menu.
*/
add_action('admin_head-post.php', function () {
		?>
		<style>
		@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
		.mce-ico.mce-i-fa {
				display: inline-block;
				font: normal normal normal 14px/1 FontAwesome;
				font-size: inherit;
				text-rendering: auto;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
		}
		</style>
		<?php

});

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
