const bulmaButton = function (ed) {
  const onClick = () => {
    var selectedText = ed.selection.getContent();
    var returnText = '[bulma-button link="#" class="is-primary" icon=""]' + selectedText + '[/bulma-button]';
    ed.execCommand('mceInsertContent', 0, returnText);
  }

  return {
    text: 'Button',
    icon: 'fa fa-mouse-pointer',
    onClick
  }
};

export {
  bulmaButton,
};
