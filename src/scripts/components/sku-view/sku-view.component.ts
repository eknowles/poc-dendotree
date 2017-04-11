import SkuViewController from './sku-view.controller';

class SkuViewComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public controllerAs: string;
  public templateUrl: string;
  public require: any;

  constructor() {
    this.bindings = {
      skus: '=',
    };
    this.controller = SkuViewController;
    this.controllerAs = '$skuViewCtrl';
    this.templateUrl = '/partials/components/sku-view.html';
  }
}

export default SkuViewComponent;
