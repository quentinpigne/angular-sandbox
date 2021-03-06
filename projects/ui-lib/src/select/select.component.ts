import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  InjectionToken,
  Input,
  Output,
  Provider,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const UI_SELECT = new InjectionToken<SelectComponent>('SelectComponent');

export const UI_SELECT_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectComponent),
  multi: true,
};

@Component({
  selector: 'ui-select',
  exportAs: 'uiSelect',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [UI_SELECT_CONTROL_VALUE_ACCESSOR, { provide: UI_SELECT, useExisting: SelectComponent }],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent implements ControlValueAccessor {
  @HostBinding('class') cssClass: string = 'ui-select';

  @Input()
  get value(): unknown {
    return this._value;
  }
  set value(newValue: unknown) {
    if (this._value !== newValue) {
      this._value = newValue;
      this._controlValueAccessorChangeFn(this.value);
    }
  }
  private _value: unknown;

  @Input() required: boolean = false;
  @Input() disabled: boolean = false;

  @ViewChild('select') selectElementRef!: ElementRef;

  _controlValueAccessorChangeFn: (value: unknown) => void = () => {};

  _onTouched: () => unknown = () => {};

  @Output() readonly selectionChange: EventEmitter<unknown> = new EventEmitter<unknown>();

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  onChange(): void {
    const selectNativeElement = this.selectElementRef.nativeElement as HTMLSelectElement;
    this.value = selectNativeElement.value;
    this.selectionChange.emit(this.value);
    this._changeDetectorRef.markForCheck();
  }

  writeValue(value: unknown): void {
    this.value = value;
    this._changeDetectorRef.markForCheck();
  }

  registerOnChange(fn: (value: unknown) => void): void {
    this._controlValueAccessorChangeFn = fn;
  }

  registerOnTouched(fn: () => unknown): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
  }
}
