import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';

import { DomPortalOutlet } from '../portal/dom-portal-outlet';

import { OverlayRef } from './overlay-ref';
import { OverlayContainerService } from './overlay-container.service';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  constructor(
    private _overlayContainerService: OverlayContainerService,
    private _injector: Injector,
    private _applicationRef: ApplicationRef,
    private _componentFactoryResolver: ComponentFactoryResolver,
  ) {}

  create(): OverlayRef {
    const portalOutlet: DomPortalOutlet = this._createPortalOutlet();
    return new OverlayRef(portalOutlet);
  }

  private _createPortalOutlet(): DomPortalOutlet {
    const overlayContainerElement: HTMLDivElement = this._overlayContainerService.containerElement;
    return new DomPortalOutlet(
      overlayContainerElement,
      this._injector,
      this._applicationRef,
      this._componentFactoryResolver,
    );
  }
}
