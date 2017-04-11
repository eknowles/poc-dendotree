import SkuItemController from './sku-item.controller';

class SkuItemComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public controllerAs: string;
  public templateUrl: string;
  public require: any;

  constructor() {
    this.bindings = {
      index: '=',
      item: '=',
      parentCtrl: '=',
    };
    this.controller = SkuItemController;
    this.controllerAs = '$skuItemCtrl';
    this.templateUrl = '/partials/components/sku-item.html';
  }
}

export default SkuItemComponent;
