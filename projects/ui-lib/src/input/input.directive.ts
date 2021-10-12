import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'input[uiInput]',
  exportAs: 'uiInput',
})
export class InputDirective {
  @HostBinding('class') cssClass: string = 'ui-input';
}
