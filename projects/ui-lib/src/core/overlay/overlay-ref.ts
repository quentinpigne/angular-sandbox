import { ComponentRef, Injector, Type, ViewContainerRef } from '@angular/core';

import { OverlayContainerService } from './overlay-container.service';

export class OverlayRef<T> {
  private _componentRef: ComponentRef<T> | null = null;

  constructor(
    private _injector: Injector,
    private _type: Type<T>,
    private _viewContainerRef: ViewContainerRef,
    private _overlayContainerService?: OverlayContainerService,
  ) {}

  open(): ComponentRef<T> {
    this._componentRef = this._viewContainerRef.createComponent(this._type, {
      index: this._viewContainerRef.length,
      injector: this._injector,
    });
    if (this._overlayContainerService) {
      this._overlayContainerService.containerElement.appendChild(this._componentRef.location.nativeElement);
    }
    return this._componentRef;
  }

  close() {
    if (this._componentRef) {
      this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._componentRef.hostView));
      this._componentRef = null;
    }
  }
}
