import * as template from './header.html';

import HeaderController from './header.controller';

class HeaderComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public controllerAs: string;
  public template: string;

  constructor() {
    this.bindings = {};
    this.controller = HeaderController;
    this.controllerAs = '$ctrl';
    this.template = template.toString();
  }
}

export default HeaderComponent;
