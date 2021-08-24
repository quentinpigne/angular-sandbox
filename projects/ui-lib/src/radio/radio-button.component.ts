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
  @Input() checked: boolean = false;
  @Input() value: any = null;

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
    }
  }
}
