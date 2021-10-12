import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorDirective } from './error.directive';
import { FormFieldComponent } from './form-field.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ErrorDirective, FormFieldComponent],
  exports: [ErrorDirective, FormFieldComponent],
})
export class FormFieldModule {}
