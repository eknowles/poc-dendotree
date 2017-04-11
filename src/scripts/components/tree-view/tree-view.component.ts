import * as template from './tree-view.html';

import TreeViewController from './tree-view.controller';

class TreeViewComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public controllerAs: string;
  public template: string;
  public require: any;

  constructor() {
    this.bindings = {
      skus: '=',
    };
    this.controller = TreeViewController;
    this.controllerAs = '$treeViewCtrl';
    this.template = template.toString();
  }
}

export default TreeViewComponent;
