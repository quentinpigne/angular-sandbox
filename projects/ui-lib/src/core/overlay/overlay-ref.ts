import { ComponentRef, Type } from '@angular/core';

import { PortalOutlet } from '../portal/portal-outlet';
import { DomPortalOutlet } from '../portal/dom-portal-outlet';

export class OverlayRef implements PortalOutlet {
  constructor(private _portalOutlet: DomPortalOutlet) {}

  attach<T>(componentType: Type<T>): ComponentRef<T> {
    return this._portalOutlet.attach(componentType);
  }

  detach(): void {
    this._portalOutlet.detach();
  }
}
