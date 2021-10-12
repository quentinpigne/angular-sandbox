import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeDirective } from './badge.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [BadgeDirective],
  exports: [BadgeDirective],
})
export class BadgeModule {}
