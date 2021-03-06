import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonComponent } from './radio-button.component';
import { RadioGroupDirective } from './radio-group.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [RadioButtonComponent, RadioGroupDirective],
  exports: [RadioButtonComponent, RadioGroupDirective],
})
export class RadioModule {}
