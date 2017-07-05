const bulmaBox = function (ed) {
  const onClick = () => {
    var selectedText = ed.selection.getContent();
    var returnText = '[bulma-box]' + selectedText + '[/bulma-box]';
    ed.execCommand('mceInsertContent', 0, returnText);
  }

  return {
    text: 'Box',
    icon: 'fa fa-square-o',
    onClick
  }
};

const bulmaNotification = function (ed) {
  const onClick = () => {
    var selectedText = ed.selection.getContent();
    var returnText = '[bulma-notification type="is-primary"]' + selectedText + '[/bulma-notification]';
    ed.execCommand('mceInsertContent', 0, returnText);
  }

  return {
    text: 'Notification',
    icon: 'fa fa-flag',
    onClick
  }
};

const bulmaCard = function (ed) {
  const onClick = () => {
    var selectedText = ed.selection.getContent();
    var returnText = `[bulma-card]<br />
                      [bulma-card-header][/bulma-card-header]<br />
                      [bulma-card-content]${selectedText}[/bulma-card-content]<br />
                      [bulma-card-footer][/bulma-card-footer]<br />
                      [/bulma-card]`;
    ed.execCommand('mceInsertContent', 0, returnText);
  }

  return {
    text: 'Card',
    icon: 'fa fa-id-card-o',
    onClick
  }
};

const bulmaIcon = function (ed) {
  const onClick = () => {
    var selectedText = ed.selection.getContent();
    var returnText = '[bulma-icon name="" type="is-primary"]' + selectedText + '[/bulma-icon]';
    ed.execCommand('mceInsertContent', 0, returnText);
  }

  return {
    text: 'Icon',
    icon: 'fa fa-font-awesome',
    onClick
  }
};

const bulmaMenu = function (ed) {
  const onClick = () => {
    var selectedText = ed.selection.getContent();
    var returnText = `[bulma-menu]<br />
                      [bulma-menu-label]Hello![/bulma-menu-label]<br />
                      [bulma-menu-list]
                        <a href="#">Link 1</a>|Text 1
                      [/bulma-menu-list]<br />
                      [/bulma-menu]`;
    ed.execCommand('mceInsertContent', 0, returnText);
  }

  return {
    text: 'Menu',
    icon: 'fa fa-font-awesome',
    onClick
  }
};

export {
  bulmaBox,
  bulmaNotification,
  bulmaCard,
  bulmaIcon,
  bulmaMenu,
};
