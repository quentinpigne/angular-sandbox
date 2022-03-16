import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabComponent } from './tab.component';
import { TabGroupComponent } from './tab-group.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TabComponent, TabGroupComponent],
  exports: [TabComponent, TabGroupComponent],
})
export class TabsModule {}
