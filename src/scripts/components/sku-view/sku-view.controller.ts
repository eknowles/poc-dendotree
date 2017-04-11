import * as faker from 'faker';

import SkuItem from '../sku-item/sku-item';

class SkuViewController {
  public skus: SkuItem[];
  public title: string;
  public lastSelectedIndex: number;

  constructor() {
    this.title = 'SKU List';
  }

  public $onInit() {
    for (let i = 1; i < 1000; i++) {
      const item = new SkuItem(`${i} - ${faker.commerce.productName()}`);
      this.skus.push(item);
    }
  }

  public get selected(): SkuItem[] {
    return this.skus.filter((s) => s.selected);
  }

  public onSelect(clickedSku: SkuItem, ev: MouseEvent) {
    if (ev.shiftKey) {
      // multi select
      const isForward = clickedSku.index > this.lastSelectedIndex;
      this.skus.filter((s: SkuItem) => {
          if (isForward) {
            return s.index > this.lastSelectedIndex && s.index < clickedSku.index;
          } else {
            return s.index < this.lastSelectedIndex && s.index > clickedSku.index;
          }
        }).map((s: SkuItem) => s.select());
    } else if (ev.altKey) {
      //  user is trying to deselect one element
    } else {
      // reset the selection
      this.skus.map((s: SkuItem) => {
        s.unselect();
      });
    }
    clickedSku.toggle();
    this.lastSelectedIndex = clickedSku.index;
  }
}

export default SkuViewController;
