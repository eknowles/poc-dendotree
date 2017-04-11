import * as angular from 'angular';
import FooterComponent from './footer/footer.component';
import HeaderComponent from './header/header.component';
import MainComponent from './main/main.component';
import SkuItemComponent from './sku-item/sku-item.component';
import SkuViewComponent from './sku-view/sku-view.component';
import TreeItemComponent from './tree-item/tree-item.component';
import TreeViewComponent from './tree-view/tree-view.component';

export default angular
  .module('app.components', [])
  .component('headerComponent', new HeaderComponent())
  .component('footerComponent', new FooterComponent())
  .component('mainComponent', new MainComponent())
  .component('treeViewComponent', new TreeViewComponent())
  .component('treeItemComponent', new TreeItemComponent())
  .component('skuViewComponent', new SkuViewComponent())
  .component('skuItemComponent', new SkuItemComponent())
;
