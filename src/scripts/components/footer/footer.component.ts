import * as template from './footer.html';

import FooterController from './footer.controller';

class FooterComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public controllerAs: string;
  public template: string;

  constructor() {
    this.bindings = {};
    this.controller = FooterController;
    this.controllerAs = '$ctrl';
    this.template = template.toString();
  }
}

export default FooterComponent;
