import { ComponentRef, EmbeddedViewRef, Injector, TemplateRef, Type } from '@angular/core';

export interface PortalOutlet {
  attach(
    element: Type<unknown> | TemplateRef<unknown>,
    injector?: Injector,
  ): ComponentRef<unknown> | EmbeddedViewRef<unknown> | void;

  detach(): void;
}

export abstract class BasePortalOutlet implements PortalOutlet {
  protected _detachFn: (() => void) | null = null;

  attach<T>(componentType: Type<T>, injector?: Injector): ComponentRef<T>;
  attach<C>(templateRef: TemplateRef<C>): EmbeddedViewRef<C>;

  attach(
    element: Type<unknown> | TemplateRef<unknown>,
    injector?: Injector,
  ): ComponentRef<unknown> | EmbeddedViewRef<unknown> | void {
    if (element instanceof Type) {
      return this.attachComponent(element, injector);
    }
    if (element instanceof TemplateRef) {
      return this.attachTemplate(element);
    }
  }

  abstract attachComponent<T>(componentType: Type<T>, injector?: Injector): ComponentRef<T>;

  abstract attachTemplate<C>(templateRef: TemplateRef<C>): EmbeddedViewRef<C>;

  detach(): void {
    if (this._detachFn) {
      this._detachFn();
      this._detachFn = null;
    }
  }
}
