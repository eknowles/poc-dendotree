import SkuItem from './sku-item';

class SkuItemController {
  public item: SkuItem;
  public index: number;
  public parentCtrl: any;

  public $onInit() {
    this.item.index = this.index;
  }

  public onClick(ev: MouseEvent) {
    this.parentCtrl.onSelect(this.item, ev);
  }
}

export default SkuItemController;
