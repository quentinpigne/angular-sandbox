import { ComponentRef, Injector, Type, ViewContainerRef } from '@angular/core';

export class OverlayRef<T> {
  private _componentRef: ComponentRef<T> | null = null;

  constructor(
    private _injector: Injector,
    private _type: Type<T>,
    private _viewContainerRef: ViewContainerRef,
    private _document: Document,
    private _container: string = 'body',
  ) {}

  open(): ComponentRef<T> {
    const container: HTMLElement = this._document.querySelector(this._container) ?? this._document.body;
    this._componentRef = this._viewContainerRef.createComponent(this._type, {
      index: this._viewContainerRef.length,
      injector: this._injector,
    });
    container.appendChild(this._componentRef.location.nativeElement);
    return this._componentRef;
  }

  close() {
    if (this._componentRef) {
      this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._componentRef.hostView));
      this._componentRef = null;
    }
  }
}
