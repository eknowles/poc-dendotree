import * as template from './main.html';

import MainController from './main.controller';

class MainComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public controllerAs: string;
  public template: string;

  constructor() {
    this.bindings = {};
    this.controller = MainController;
    this.controllerAs = '$ctrl';
    this.template = template.toString();
  }
}

export default MainComponent;
