import * as template from './sku-item.html';

import SkuItemController from './sku-item.controller';

class SkuItemComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public controllerAs: string;
  public template: string;
  public require: any;

  constructor() {
    this.bindings = {
      index: '=',
      item: '=',
      parentCtrl: '=',
    };
    this.controller = SkuItemController;
    this.controllerAs = '$skuItemCtrl';
    this.template = template.toString();
  }
}

export default SkuItemComponent;
