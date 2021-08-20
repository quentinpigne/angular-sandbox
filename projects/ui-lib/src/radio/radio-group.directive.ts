import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: 'ui-radio-group',
  exportAs: 'uiRadioGroup',
  host: {
    'class': 'ui-radio-group'
  }
})
export class RadioGroupDirective {

  constructor() { }
}
