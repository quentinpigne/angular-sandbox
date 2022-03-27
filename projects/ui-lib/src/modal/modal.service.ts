import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injectable, Injector, Type } from '@angular/core';

import { OverlayContainerService } from '../core/overlay/overlay-container.service';
import { DomPortalOutlet } from '../core/portal/dom-portal-outlet';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _portalOutlet: DomPortalOutlet;

  constructor(
    private readonly _injector: Injector,
    private readonly _applicationRef: ApplicationRef,
    private readonly _componentFactoryResolver: ComponentFactoryResolver,
    private readonly _overlayContainerService: OverlayContainerService,
  ) {
    this._portalOutlet = new DomPortalOutlet(
      this._overlayContainerService.containerElement,
      this._injector,
      this._applicationRef,
      this._componentFactoryResolver,
    );
  }

  open<T>(componentType: Type<T>): ComponentRef<T> {
    return this._portalOutlet.attach(componentType);
  }

  close(): void {
    this._portalOutlet.detach();
  }
}
