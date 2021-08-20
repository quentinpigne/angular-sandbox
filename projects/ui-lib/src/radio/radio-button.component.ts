import { Component, Input } from '@angular/core';

let nextUniqueId = 0;

@Component({
  selector: 'ui-radio-button',
  exportAs: 'uiRadioButton',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  host: {
    'class': 'ui-radio-button'
  }
})
export class RadioButtonComponent {

  private _uniqueId: string = `ui-checkbox-${++nextUniqueId}`;

  @Input() id: string = this._uniqueId;

  get inputId(): string { return `${this.id || this._uniqueId}-input`; }

  constructor() { }
}
