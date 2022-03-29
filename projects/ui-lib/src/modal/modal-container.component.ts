import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  EmbeddedViewRef,
  HostBinding,
  TemplateRef,
  Type,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

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

  attachComponent<T>(componentType: Type<T>): ComponentRef<T> {
    return this.portalOutlet.attach(componentType);
  }

  attachTemplate<C>(templateRef: TemplateRef<C>): EmbeddedViewRef<C> {
    return this.portalOutlet.attach(templateRef);
  }
}
