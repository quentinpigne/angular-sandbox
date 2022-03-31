import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { DomPortalOutlet } from '../portal/dom-portal-outlet';

import { OverlayRef } from './overlay-ref';
import { OverlayContainerService } from './overlay-container.service';
import { OverlayConfig } from './overlay-config';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  constructor(
    private _overlayContainerService: OverlayContainerService,
    private _injector: Injector,
    private _applicationRef: ApplicationRef,
    private _componentFactoryResolver: ComponentFactoryResolver,
    @Inject(DOCUMENT) private _document: Document,
  ) {}

  create(config?: OverlayConfig): OverlayRef {
    const portalOutlet: DomPortalOutlet = this._createPortalOutlet();
    return new OverlayRef(this._document, portalOutlet, config);
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
