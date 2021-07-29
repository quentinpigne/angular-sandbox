import { Directive } from '@angular/core';

@Directive({
  selector: 'ui-error',
  exportAs: 'uiError',
  host: {
    'class': 'ui-error'
  }
})
export class ErrorDirective {

  constructor() { }

}
