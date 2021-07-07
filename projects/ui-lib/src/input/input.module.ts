import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDirective } from './input.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InputDirective
  ],
  exports: [
    InputDirective
  ]
})
export class InputModule { }
