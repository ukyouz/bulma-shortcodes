<?php
/**
 * Plugin Name: Bulma Shortcodes
 * Plugin URI: https://github.com/bartboy011/bulma-shortcodes
 * Description: Adds bulma-based shortcodes to editor
 * Author: Joshua Bartlett
 * Author URI: https://www.joshuarbartlett.com
 * License: GPL2
 *
 * Bulma Shortcodes is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * any later version.
 *
 * Bulma Shortcodes is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 */

require dirname(__FILE__) . '/inc/functions.php';

class BulmaShortcodesPlugin
{
		public function __construct()
		{
				if (is_admin()) {
						add_action('init', array( &$this, 'setup_bulma_shortcodes_plugin'));
				} else {
						$this->bulma_register_all_shortcodes();
				}
		}

		public function setup_bulma_shortcodes_plugin()
		{
				if (! current_user_can('edit_posts') && ! current_user_can('edit_pages')) {
						return;
				}

				if (get_user_option('rich_editing') !== 'true') {
						return;
				}

				add_filter('mce_external_plugins', array( &$this, 'add_bulma_shortcodes_plugin' ));
				add_filter('mce_buttons', array( &$this, 'add_bulma_shortcodes_toolbar_button' ));
		}

		public function add_bulma_shortcodes_plugin()
		{
				$plugin_array['bulma_shortcodes_plugin'] = plugin_dir_url(__FILE__) . "bulma_shortcodes_plugin.js";
				return $plugin_array;
		}

		public function add_bulma_shortcodes_toolbar_button($buttons)
		{
				array_push($buttons, 'bulma_shortcodes');
				return $buttons;
		}

		private function bulma_register_all_shortcodes()
		{
				add_shortcode('bulma-box', 'bulma_sBox');
				add_shortcode('bulma-notification', 'bulma_sNotification');
				add_shortcode('bulma-card', 'bulma_sCard');
				add_shortcode('bulma-card-header', 'bulma_sCardHeader');
				add_shortcode('bulma-card-content', 'bulma_sCardContent');
				add_shortcode('bulma-card-footer', 'bulma_sCardFooter');
				add_shortcode('bulma-icon', 'bulma_sIcon');
				add_shortcode('bulma-menu', 'bulma_sMenu');
				add_shortcode('bulma-menu-label', 'bulma_sMenuLabel');
				add_shortcode('bulma-menu-list', 'bulma_sMenuList');
				add_shortcode('bulma-button', 'bulma_sButton');
				add_shortcode('bulma-columns', 'bulma_sColumns');
				add_shortcode('bulma-columns-1', 'bulma_sColumns');
				add_shortcode('bulma-columns-2', 'bulma_sColumns');
				add_shortcode('bulma-columns-3', 'bulma_sColumns');
				add_shortcode('bulma-columns-4', 'bulma_sColumns');
				add_shortcode('bulma-column', 'bulma_sColumn');
				add_shortcode('bulma-column-1', 'bulma_sColumn');
				add_shortcode('bulma-column-2', 'bulma_sColumn');
				add_shortcode('bulma-column-3', 'bulma_sColumn');
				add_shortcode('bulma-column-4', 'bulma_sColumn');
		}
}

$bulma_shortcodes_plugin = new BulmaShortcodesPlugin;
