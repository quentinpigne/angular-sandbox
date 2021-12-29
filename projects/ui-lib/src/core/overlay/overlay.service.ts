import { Injectable, Injector, Type, ViewContainerRef } from '@angular/core';

import { OverlayContainerService } from './overlay-container.service';
import { OverlayRef } from './overlay-ref';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  constructor(private _overlayContainerService: OverlayContainerService, private _injector: Injector) {}

  create<T>(type: Type<T>, viewContainerRef: ViewContainerRef): OverlayRef<T> {
    return new OverlayRef(this._injector, type, viewContainerRef, this._overlayContainerService);
  }
}
