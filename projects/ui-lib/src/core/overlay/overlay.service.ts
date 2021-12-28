import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Injector, Type, ViewContainerRef } from '@angular/core';

import { OverlayContainerService } from './overlay-container.service';
import { OverlayRef } from './overlay-ref';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  constructor(
    private _overlayContainer: OverlayContainerService,
    private _injector: Injector,
    @Inject(DOCUMENT) private _document: Document,
  ) {}

  create<T>(type: Type<T>, viewContainerRef: ViewContainerRef): OverlayRef<T> {
    return new OverlayRef(this._injector, type, viewContainerRef, this._document);
  }
}
