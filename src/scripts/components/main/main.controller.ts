import SkuItem from '../sku-item/sku-item';

class MainController {
  private $mdDialog: any;
  private $mdToast: any;
  private $mdSidenav: any;
  private skus: SkuItem[] = [];

  constructor($mdDialog, $mdToast, $mdSidenav) {
    this.$mdDialog = $mdDialog;
    this.$mdToast = $mdToast;
    this.$mdSidenav = $mdSidenav;
  }

  public $onInit() {
  }

  public toggleTree() {
    this.$mdSidenav('tree-view').toggle();
  }
}

export default MainController;
