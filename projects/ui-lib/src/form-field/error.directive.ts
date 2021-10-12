import { Directive, HostBinding } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'ui-error',
  exportAs: 'uiError',
})
export class ErrorDirective {
  @HostBinding('class') cssClass: string = 'ui-error';
}
