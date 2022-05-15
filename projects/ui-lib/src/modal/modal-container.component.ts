import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  EmbeddedViewRef,
  HostBinding,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import { ComponentPortal, TemplatePortal } from '../core/portal/portal';
import { PortalOutletDirective } from '../core/portal/portal-directive';
import { BasePortalOutlet } from '../core/portal/portal-outlet';

@Component({
  selector: 'ui-modal-container',
  exportAs: 'uiModalContainer',
  template: `<ng-container uiPortalOutlet></ng-container>`,
  styleUrls: ['./modal-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalContainerComponent extends BasePortalOutlet {
  @HostBinding('class') cssClass: string = 'ui-modal-container';

  @ViewChild(PortalOutletDirective, { static: true }) portalOutlet!: PortalOutletDirective;

  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
    return this.portalOutlet.attach(portal);
  }

  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    return this.portalOutlet.attach(portal);
  }
}
