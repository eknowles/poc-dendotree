import TreeViewController from './tree-view.controller';

class TreeViewComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public controllerAs: string;
  public templateUrl: string;
  public require: any;

  constructor() {
    this.bindings = {
      skus: '=',
    };
    this.controller = TreeViewController;
    this.controllerAs = '$treeViewCtrl';
    this.templateUrl = '/partials/components/tree-view.html';
  }
}

export default TreeViewComponent;
