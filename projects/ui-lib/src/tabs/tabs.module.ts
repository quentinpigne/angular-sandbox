import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalModule } from '../core/portal/portal.module';

import { TabComponent } from './tab.component';
import { TabGroupComponent } from './tab-group.component';

@NgModule({
  imports: [CommonModule, PortalModule],
  declarations: [TabComponent, TabGroupComponent],
  exports: [TabComponent, TabGroupComponent],
})
export class TabsModule {}
