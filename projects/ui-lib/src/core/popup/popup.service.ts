import { ComponentRef, Injector, Type, ViewContainerRef } from '@angular/core';

export class PopupService<T> {
  private _popupRef: ComponentRef<T> | null = null;

  constructor(private _injector: Injector, private _type: Type<T>, private _viewContainerRef: ViewContainerRef) {}

  open(): ComponentRef<T> {
    this._popupRef = this._viewContainerRef.createComponent(this._type, {
      index: this._viewContainerRef.length,
      injector: this._injector,
    });
    return this._popupRef;
  }

  close() {
    if (this._popupRef) {
      this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._popupRef.hostView));
      this._popupRef = null;
    }
  }
}
