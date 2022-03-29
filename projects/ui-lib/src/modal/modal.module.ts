import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalModule } from '../core/portal/portal.module';
import { ModalContainerComponent } from './modal-container.component';

@NgModule({
  imports: [CommonModule, PortalModule],
  declarations: [ModalContainerComponent],
  exports: [],
})
export class ModalModule {}
