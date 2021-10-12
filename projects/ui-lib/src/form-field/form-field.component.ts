import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-form-field',
  exportAs: 'uiFormField',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss', './form-field-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent {
  @HostBinding('class') cssClass: string = 'ui-form-field';
}
