import { ContentChildren, Directive, EventEmitter, forwardRef, InjectionToken, Input, OnInit, Output, QueryList } from '@angular/core';
import { RadioButtonComponent } from './radio-button.component';

let nextUniqueId = 0;

export const UI_RADIO_GROUP = new InjectionToken<RadioGroupDirective>('RadioGroupDirective');

@Directive({
  selector: 'ui-radio-group',
  exportAs: 'uiRadioGroup',
  host: {
    'class': 'ui-radio-group'
  },
  providers: [
    { provide: UI_RADIO_GROUP, useExisting: RadioGroupDirective },
  ],
})
export class RadioGroupDirective {

  @Input()
  get name(): string { return this._name; }
  set name(value: string) {
    this._name = value;
    this._updateRadioButtonNames();
  }
  private _name: string = `mat-radio-group-${nextUniqueId++}`;

  @Input() value: any = null;

  @Output() readonly change: EventEmitter<any> = new EventEmitter<any>();

  @ContentChildren(forwardRef(() => RadioButtonComponent), { descendants: true })
  private _radios: QueryList<RadioButtonComponent> | undefined;

  constructor() { }

  private _updateRadioButtonNames(): void {
    if (this._radios) {
      this._radios.forEach(radio => {
        radio.name = this.name;
        radio.markForCheck();
      });
    }
  }
}
