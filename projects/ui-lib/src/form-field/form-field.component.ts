import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-form-field',
  exportAs: 'uiFormField',
  templateUrl: './form-field.component.html',
  styleUrls: [
    './form-field.component.scss',
    './form-field-input.component.scss'
  ],
  host: {
    'class': 'ui-form-field'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldComponent {

  constructor() { }

}
