/* eslint no-undef: 0 */

import { bulmaColumns, bulmaColumn } from './grid.js';
import { bulmaButton } from './elements.js';
import { bulmaBox, bulmaNotification, bulmaCard, bulmaIcon, bulmaMenu } from './components.js';

(function () {
  const menuComponents = [
    bulmaButton,
    bulmaColumns,
    bulmaColumn,
    bulmaBox,
    bulmaNotification,
    bulmaCard,
    bulmaIcon,
    bulmaMenu,
  ]

  tinymce.create('tinymce.plugins.bulma_shortcodes_plugin', {

    // url argument holds the absolute url of our plugin directory
    init(ed, url) {
      const menuItems = [];

      menuComponents.forEach(comp => {
        const item = comp(ed);
        menuItems.push(item);
      });

      // add new button
      ed.addButton('bulma_shortcodes', {
        type: 'menubutton',
        text: 'Bulma',
        menu: menuItems,
      });
    },

    getInfo() {
      return {
        longname: 'Bulma Shortcodes Plugin',
        author: 'Joshua Bartlett',
        version: '1',
      };
    },
  });

  tinymce.PluginManager.add('bulma_shortcodes_plugin', tinymce.plugins.bulma_shortcodes_plugin);
}());
