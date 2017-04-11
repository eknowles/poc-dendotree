import * as faker from 'faker';

import SkuItem from '../sku-item/sku-item';
import TreeItem from '../tree-item/tree-item';

class TreeViewController {
  public tree: TreeItem[] = [];
  public skus: SkuItem[];
  public title: string = 'Tree View';

  public removeItem(treeId: string) {
    this.tree = this.findAndRemoveId(this.tree, treeId);
  }

  public findAndRemoveId(items: TreeItem[], treeId: string): TreeItem[] {
    return items.filter((i) => {
      if (i.children && i.children.length) {
        this.findAndRemoveId(i.children, treeId);
      } else {
        return i.id !== treeId;
      }
    });
  }

  public $onInit() {
    for (let i = 0; i < 2; i++) {
      const product = new TreeItem(faker.commerce.product());
      for (let i0 = 0; i0 < 2; i0++) {
        const material = new TreeItem(faker.commerce.productMaterial());
        material.parent = product;
        for (let i1 = 0; i1 < 2; i1++) {
          const color = new TreeItem(faker.commerce.color());
          color.parent = material;
          material.children.push(color);
        }
        product.children.push(material);
      }
      this.tree.push(product);
    }
  }

  public addSku() {
    alert();
  }
}

export default TreeViewController;
