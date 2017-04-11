import TreeItemController from './tree-item.controller';

class TreeItemComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public controllerAs: string;
  public templateUrl: string;
  public require: any;

  constructor() {
    this.bindings = {
      item: '=',
      treeController: '=',
      addSku: '&',
    };
    this.controller = TreeItemController;
    this.controllerAs = '$treeItemCtrl';
    this.templateUrl = '/partials/components/tree-item.html';
  }
}

export default TreeItemComponent;
