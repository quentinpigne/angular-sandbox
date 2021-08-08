import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

let nextUniqueId = 0;

@Component({
  selector: 'ui-checkbox',
  exportAs: 'uiCheckbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  host: {
    'class': 'ui-checkbox',
    '[id]': 'id'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {

  private _uniqueId: string = `ui-checkbox-${++nextUniqueId}`;

  @Input() id: string = this._uniqueId;

  get inputId(): string { return `${this.id || this._uniqueId}-input`; }

  constructor() { }

}
