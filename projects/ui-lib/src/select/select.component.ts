import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-select',
  exportAs: 'uiSelect',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  host: {
    'class': 'ui-select'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {

  constructor() { }

}
