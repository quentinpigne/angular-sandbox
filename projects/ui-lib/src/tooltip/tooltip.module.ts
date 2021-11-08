import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipDirective, TooltipComponent } from './tooltip.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [TooltipDirective, TooltipComponent],
  entryComponents: [TooltipComponent],
  exports: [TooltipDirective],
})
export class TooltipModule {}
