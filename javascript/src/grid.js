const bulmaColumns = function (ed) {
  const onClick = () => {
    var selectedText = ed.selection.getContent();
    var returnText = `[bulma-columns]<br />[bulma-column]${selectedText}[/bulma-column]<br />[bulma-column][/bulma-column]<br />[/bulma-columns]`;
    ed.execCommand('mceInsertContent', 0, returnText);
  }

  return {
    text: 'Columns',
    icon: 'fa fa-bars',
    onClick
  }
};

const bulmaColumn = function (ed) {
  const onClick = () => {
    var selectedText = ed.selection.getContent();
    var returnText = `[bulma-column]${selectedText}[/bulma-column]`;
    ed.execCommand('mceInsertContent', 0, returnText);
  }

  return {
    text: 'Column',
    icon: 'fa fa-columns',
    onClick
  }
};

export {
  bulmaColumns,
  bulmaColumn,
};
