import * as template from './sku-view.html';

import SkuViewController from './sku-view.controller';

class SkuViewComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public controllerAs: string;
  public template: string;
  public require: any;

  constructor() {
    this.bindings = {
      skus: '=',
    };
    this.controller = SkuViewController;
    this.controllerAs = '$skuViewCtrl';
    this.template = template.toString();
  }
}

export default SkuViewComponent;
