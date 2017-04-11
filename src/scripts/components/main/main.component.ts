import MainController from './main.controller';

class MainComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public controllerAs: string;
  public templateUrl: string;

  constructor() {
    this.bindings = {};
    this.controller = MainController;
    this.controllerAs = '$ctrl';
    this.templateUrl = '/partials/components/main.html';

  }
}

export default MainComponent;
