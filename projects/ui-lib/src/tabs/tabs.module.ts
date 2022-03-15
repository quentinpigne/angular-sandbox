import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabGroupComponent } from './tab-group.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TabGroupComponent],
  exports: [TabGroupComponent],
})
export class TabsModule {}
