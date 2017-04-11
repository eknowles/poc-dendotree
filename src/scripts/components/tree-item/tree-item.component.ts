import * as template from './tree-item.html';

import TreeItemController from './tree-item.controller';

class TreeItemComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public controllerAs: string;
  public template: string;
  public require: any;

  constructor() {
    this.bindings = {
      addSku: '&',
      item: '=',
      treeController: '=',
    };
    this.controller = TreeItemController;
    this.controllerAs = '$treeItemCtrl';
    this.template = template.toString();
  }
}

export default TreeItemComponent;
