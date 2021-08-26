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
  set name(newName: string) {
    this._name = newName;
    this._updateRadioButtonNames();
  }
  private _name: string = `mat-radio-group-${nextUniqueId++}`;

  @Input()
  get value(): any { return this._value; }
  set value(newValue: any) {
    if (this._value !== newValue) {
      this._value = newValue;
      this._updateSelectedRadioFromValue();
    }
  }
  private _value: any;

  @Input()
  get selected() { return this._selected; }
  set selected(selected: RadioButtonComponent | null) {
    this._selected = selected;
    this.value = selected ? selected.value : null;
    this._checkSelectedRadioButton();
  }
  private _selected: RadioButtonComponent | null = null;

  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(newDisabledValue: boolean) {
    this._disabled = newDisabledValue;
    this._radios?.forEach(radio => radio.markForCheck());
  }
  private _disabled: boolean = false;

  @Input()
  get required(): boolean { return this._required; }
  set required(newRequiredValue: boolean) {
    this._required = newRequiredValue;
    this._radios?.forEach(radio => radio.markForCheck());
  }
  private _required: boolean = false;

  @Output() readonly change: EventEmitter<any> = new EventEmitter<any>();

  @ContentChildren(forwardRef(() => RadioButtonComponent), { descendants: true })
  private _radios: QueryList<RadioButtonComponent> | undefined;

  constructor() { }

  private _updateRadioButtonNames(): void {
    this._radios?.forEach(radio => {
      radio.name = this.name;
      radio.markForCheck();
    });
  }

  private _updateSelectedRadioFromValue(): void {
    this._radios?.forEach(radio => {
      radio.checked = this._value === radio.value;
    })
  }

  private _checkSelectedRadioButton() {
    if (this._selected && !this._selected.checked) {
      this._selected.checked = true;
    }
  }
}
