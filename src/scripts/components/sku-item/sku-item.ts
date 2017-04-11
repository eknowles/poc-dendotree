import * as v4 from 'uuid/v4';

class SkuItem {
  public id;
  public name: string;
  public selected: boolean;
  public index: number;
  public location: string;

  constructor(name) {
    this.name = name;
    this.id = v4();
    this.selected = false;
  }

  public select() {
    this.selected = true;
  }

  public unselect() {
    this.selected = false;
  }

  public toggle() {
    this.selected = !this.selected;
  }
}

export default SkuItem;
