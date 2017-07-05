<?php
/**
 * Contains:
 *  * Box
 *  * Notification
 *  * Card
 *  *  * Card Header
 *  *  * Card Content
 *  *  * Card Footer
 *  * Menu
 *  *  * Menu Label
 *  *  * Menu List
 */

/**
* Creates the tag <div class="box"></div>
*/

function bulma_sBox($atts, $content = null)
{
		extract(shortcode_atts(array('type'=> ''), $atts));
		if ($type === 'full-width') {
				$string = '<div class="box">'.do_shortcode($content).'</div>';
		} else {
				$string = '<div class="box" style="display: inline-block;">'.do_shortcode($content).'</div>';
		}
		return $string;
}

/**
* Creates the tag <div class="notification"></div>
*/

function bulma_sNotification($atts, $content = null)
{
		extract(shortcode_atts(array('type' => 'is-primary'), $atts));
		return '<div class="notification '.$type.'">'.do_shortcode($content).'</div>';
}

/**
* Creates the tag <div class="card"></div>
*/

function bulma_sCard($atts, $content = null)
{
		return '<div class="card">'.do_shortcode($content).'</div>';
}

/**
* Creates the tag <header class="card-header"><h4 class="card-header-title"></h4></header>
*/

function bulma_sCardHeader($atts, $content = null)
{
		extract(shortcode_atts(array(), $atts));
		return '<header class="card-header"><h4 class="card-header-title is-marginless">'.do_shortcode($content).'</h4></header>';
}

/**
* Creates the tag <div class="card-content"></div>
*/

function bulma_sCardContent($atts, $content = null)
{
		extract(shortcode_atts(array(), $atts));
		return '<div class="card-content content">'.do_shortcode($content).'</div>';
}

/**
* Creates the tag <footer class="card-footer"></footer>
*/

function bulma_sCardFooter($atts, $content = null)
{
		$parsed_content = do_shortcode($content);
		extract(shortcode_atts(array(), $atts));
		if (strpos($parsed_content, '<a') !== false) {
				$atemplate = "
			 <a href='$1' class='has-arrow-icon'>
				 $2
				 <span class='icon'>
					 <i class='fa fa-arrow-right'></i>
				 </span>
			 </a>";

				$parsed_content = preg_replace('/<a href=\"(.*?)\">(.*?)<\/a>/', $atemplate, $parsed_content);
		}

		$footer_item_array = bulma_split_at_bar($parsed_content);
		$concatenated_content = '';

		foreach ($footer_item_array as $item) {
				$string = '<div class="card-footer-item">'.$item.'</div>';
				$concatenated_content .= $string;
		}

		return '<footer class="card-footer">'.$concatenated_content.'</footer>';
}

/**
* Creates the tag <span class="icon"><i class="fa fa-icon"></i></span>
*/

function bulma_sIcon($atts, $content = null)
{
		extract(shortcode_atts(array('name' => '', 'type'=>''), $atts));
		return '<span class="icon '.$type.'"><i class="fa fa-'.$name.'"></i></span>';
}

/**
* Creates the tag <aside class="menu"></aside>
*/

function bulma_sMenu($atts, $content = null)
{
		return '<aside class="menu">'.do_shortcode($content).'</aside>';
}

/**
* Creates the tag <p class="menu-label"></p>
*/

function bulma_sMenuLabel($atts, $content = null)
{
		return '<p class="menu-label">'.do_shortcode($content).'</p>';
}

/**
* Creates the tag <footer class="card-footer"></footer>
*/

function bulma_sMenuList($atts, $content = null)
{
		$parsed_content = do_shortcode($content);
		extract(shortcode_atts(array(), $atts));

		$menu_item_array = bulma_split_at_bar($parsed_content);
		$concatenated_content = '';

		foreach ($menu_item_array as $item) {
				$string = '<li>'.$item.'</li>';
				$concatenated_content .= $string;
		}

		return '<ul class="menu-list">'.$concatenated_content.'</ul>';
}
