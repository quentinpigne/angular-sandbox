import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let nextUniqueId = 0;

const UI_CHECKBOX_VALUE_ACCESSOR_PROVIDER = {
  provide: NG_VALUE_ACCESSOR,
  multi: true,
  useExisting: forwardRef(() => CheckboxComponent),
};

@Component({
  selector: 'ui-checkbox',
  exportAs: 'uiCheckbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  host: {
    'class': 'ui-checkbox',
    '[id]': 'id',
    '[class.ui-checkbox-checked]': 'checked',
    '[class.ui-checkbox-disabled]': 'disabled',
  },
  providers: [UI_CHECKBOX_VALUE_ACCESSOR_PROVIDER],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent implements ControlValueAccessor {

  private _uniqueId: string = `ui-checkbox-${++nextUniqueId}`;

  @Input() id: string = this._uniqueId;

  get inputId(): string { return `${this.id || this._uniqueId}-input`; }

  @Input() name: string | null = null;
  @Input() required: boolean = false;
  @Input() value: string | null = null;

  @Input()
  get checked(): boolean { return this._checked; }
  set checked(value: boolean) {
    if (value !== this.checked) {
      this._checked = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  private _checked: boolean = false;

  @Input()
  get disabled() { return this._disabled; }
  set disabled(value: any) {
    if (value !== this.disabled) {
      this._disabled = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  private _disabled: boolean = false;

  @Output() readonly change: EventEmitter<boolean> = new EventEmitter<boolean>();

  _onTouched: () => any = () => {};

  private _controlValueAccessorChangeFn: (value: any) => void = () => {};

  constructor(private _changeDetectorRef: ChangeDetectorRef) { }

  writeValue(value: any) {
    this.checked = !!value;
  }

  registerOnChange(fn: (value: any) => void) {
    this._controlValueAccessorChangeFn = fn;
  }

  registerOnTouched(fn: any) {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  private _emitChangeEvent() {
    this._controlValueAccessorChangeFn(this.checked);
    this.change.emit(this.checked);
  }

  toggle(): void {
    this.checked = !this.checked;
  }

  onChange(event: Event) {
    event.stopPropagation();
  }

  onInputClick(event: Event) {
    event.stopPropagation();

    if (!this.disabled) {
      this.toggle();
      this._emitChangeEvent();
    }
  }
}
