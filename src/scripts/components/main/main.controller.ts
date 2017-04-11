import SkuItem from '../sku-item/sku-item';

class MainController {
  private skus: SkuItem[] = [];

  constructor(
    private $mdSidenav: angular.material.ISidenavService,
  ) {
    // here be things
  }

  public toggleTree() {
    this.$mdSidenav('tree-view').toggle();
  }
}

export default MainController;
