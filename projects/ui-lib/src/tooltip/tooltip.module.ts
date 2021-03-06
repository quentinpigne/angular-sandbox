import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipComponent } from './tooltip.component';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [TooltipComponent, TooltipDirective],
  entryComponents: [TooltipComponent],
  exports: [TooltipDirective],
})
export class TooltipModule {}
