import { Directive } from '@angular/core';

@Directive({
  selector: 'input[uiInput]',
  exportAs: 'uiInput',
  host: {
    'class': 'ui-input'
  }
})
export class InputDirective {

  constructor() { }

}
