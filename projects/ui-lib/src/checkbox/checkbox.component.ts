import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  HostBinding,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { getUniqueComponentId } from '../core/utils/unique-component-id';

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
  providers: [UI_CHECKBOX_VALUE_ACCESSOR_PROVIDER],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent implements ControlValueAccessor {
  @HostBinding('class') cssClass: string = 'ui-checkbox';

  private _uniqueId: string = getUniqueComponentId('ui-checkbox');

  @Input()
  @HostBinding('id')
  id: string = this._uniqueId;

  get inputId(): string {
    return `${this.id || this._uniqueId}-input`;
  }

  @Input() name: string | null = null;
  @Input() required: boolean = false;
  @Input() value: string | null = null;

  @Input()
  @HostBinding('class.ui-checkbox-checked')
  get checked(): boolean {
    return this._checked;
  }
  set checked(value: boolean) {
    if (value !== this.checked) {
      this._checked = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  private _checked: boolean = false;

  @Input()
  @HostBinding('class.ui-checkbox-disabled')
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    if (value !== this.disabled) {
      this._disabled = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  private _disabled: boolean = false;

  @Output() readonly change: EventEmitter<boolean> = new EventEmitter<boolean>();

  _onTouched: () => void = () => {};

  private _controlValueAccessorChangeFn: (value: boolean) => void = () => {};

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  writeValue(value: boolean): void {
    this.checked = !!value;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this._controlValueAccessorChangeFn = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  private _emitChangeEvent() {
    this._controlValueAccessorChangeFn(this.checked);
    this.change.emit(this.checked);
  }

  toggle(): void {
    this.checked = !this.checked;
  }

  onChange(event: Event): void {
    event.stopPropagation();
  }

  onInputClick(event: Event): void {
    event.stopPropagation();

    if (!this.disabled) {
      this.toggle();
      this._emitChangeEvent();
    }
  }
}
