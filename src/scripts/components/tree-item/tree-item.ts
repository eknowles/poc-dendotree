import * as v4 from 'uuid/v4';

class TreeItem {
  public id;
  public name: string;
  public children: any[];
  public open: boolean;
  public parent: TreeItem;

  constructor(name) {
    this.name = name;
    this.id = v4();
    this.open = false;
    this.children = [];
  }

  public breadcrumbs(path: string[] = []) {
    path.push(this.name);
    if (this.parent) {
      return this.parent.breadcrumbs(path);
    } else {
      return path.reverse();
    }
  }
}

export default TreeItem;
