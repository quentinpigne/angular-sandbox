import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, OnInit, Optional, Output, ViewEncapsulation } from '@angular/core';
import { RadioGroupDirective, UI_RADIO_GROUP } from './radio-group.directive';

let nextUniqueId = 0;

@Component({
  selector: 'ui-radio-button',
  exportAs: 'uiRadioButton',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  host: {
    'class': 'ui-radio-button',
    '[attr.id]': 'id'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioButtonComponent implements OnInit {

  private _uniqueId: string = `ui-checkbox-${++nextUniqueId}`;

  @Input() id: string = this._uniqueId;

  get inputId(): string { return `${this.id || this._uniqueId}-input`; }

  @Input() name: string | undefined;

  @Input()
  get checked(): boolean { return this._checked }
  set checked(newCheckedValue: boolean) {
    if (this._checked !== newCheckedValue) {
      this._checked = newCheckedValue;
      if (newCheckedValue && this._radioGroup && this._radioGroup.value !== this.value) {
        this._radioGroup.selected = this;
      } else if (!newCheckedValue && this._radioGroup && this._radioGroup.value === this.value) {
        this._radioGroup.selected = null;
      }
    }
    this._changeDetectorRef.markForCheck();
  }
  private _checked: boolean = false;

  @Input()
  get value(): any { return this._value }
  set value(newValue: any) {
    if (this._value !== newValue) {
      this._value = newValue;
      if (this._radioGroup) {
        if (!this.checked) {
          this.checked = this._radioGroup.value === newValue;
        }
        if (this.checked) {
          this._radioGroup.selected = this;
        }
      }
    }
  }
  private _value: any = null;

  @Input()
  get disabled(): boolean { return this._disabled || this._radioGroup?.disabled }
  set disabled(newDisabledValue: boolean) {
    if (this._disabled !== newDisabledValue) {
      this._disabled = newDisabledValue;
      this._changeDetectorRef.markForCheck();
    }
  }
  private _disabled: boolean = false;

  @Input()
  get required(): boolean { return this._required || this._radioGroup?.required }
  set required(newRequiredValue: boolean) {
    if (this._required !== newRequiredValue) {
      this._required = newRequiredValue;
      this._changeDetectorRef.markForCheck();
    }
  }
  private _required: boolean = false;

  @Output() readonly change: EventEmitter<any> = new EventEmitter<any>();

  private _radioGroup: RadioGroupDirective;

  constructor(
    @Optional() @Inject(UI_RADIO_GROUP) radioGroup: RadioGroupDirective,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
    this._radioGroup = radioGroup;
  }

  ngOnInit() {
    if (this._radioGroup) {
      this.checked = this._radioGroup.value === this.value;
      this.name = this._radioGroup.name;
    }
  }

  markForCheck() {
    this._changeDetectorRef.markForCheck();
  }

  onChange(event: Event) {
    event.stopPropagation();
  }

  onInputClick(event: Event) {
    event.stopPropagation();

    if (!this.checked) {
      this.checked = true;
      this.change.emit(this.value);

      const groupValueChanged = this._radioGroup && this.value !== this._radioGroup.value;
      if (groupValueChanged) {
        this._radioGroup.change.emit(this._radioGroup.value);
      }
    }
  }
}
