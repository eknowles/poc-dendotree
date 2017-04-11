import * as interact from 'interactjs';

import TreeViewController from './../tree-view/tree-view.controller';
import TreeItem from './tree-item';

class TreeItemController {
  public item: TreeItem;
  private open: boolean;
  private treeController: TreeViewController;

  constructor(
    private $mdDialog: angular.material.IDialogService,
    private $mdToast: angular.material.IToastService,
  ) {
    this.open = false;
  }

  public insertSku() {
    console.log(this.item.breadcrumbs());
  }

  public toggle() {
    this.open = !this.open;
  }

  public get toggleClass() {
    return this.open ? 'expand_less' : 'expand_more';
  }

  public removeGroup(ev) {
    this.treeController.removeItem(this.item.id);
    this.$mdToast.show(
      this.$mdToast.simple()
        .textContent('Group Successfully Removed!')
        .position('bottom right')
        .hideDelay(3000),
    );
  }

  public renameGroup(ev) {
    const rename = this.$mdDialog.prompt()
      .title('Rename Group')
      .textContent('Enter a new name for this group')
      .initialValue(this.item.name)
      .placeholder('New group name')
      .targetEvent(ev)
      .ok('Rename Group')
      .cancel('Cancel');

    this.$mdDialog
      .show(rename)
      .then((result) => {
        this.item.name = `${result}`;
        this.$mdToast.show(
          this.$mdToast.simple()
            .textContent('Group Successfully Renamed!')
            .position('bottom right')
            .hideDelay(3000),
        );
      }, () => {});
  };

  public insertGroup(ev) {
    const rename = this.$mdDialog.prompt()
      .title('New Child Group')
      .textContent(`Enter name for the new Group`)
      .placeholder('My New Category')
      .targetEvent(ev)
      .ok('Add Group')
      .cancel('Cancel');

    this.$mdDialog
      .show(rename)
      .then((result) => {
        this.item.children.push(new TreeItem(result));
        this.item.open = true;
        this.$mdToast.show(
          this.$mdToast.simple()
            .textContent('Group Successfully Inserted!')
            .position('bottom right')
            .hideDelay(3000),
        );
      }, () => {});
  }

}

export default TreeItemController;
