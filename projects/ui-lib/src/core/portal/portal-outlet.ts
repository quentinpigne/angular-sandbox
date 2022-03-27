import { ComponentRef, EmbeddedViewRef, TemplateRef, Type } from '@angular/core';

export interface PortalOutlet {
  attach(element: Type<unknown> | TemplateRef<unknown>): ComponentRef<unknown> | EmbeddedViewRef<unknown> | void;

  detach(): void;
}

export abstract class BasePortalOutlet implements PortalOutlet {
  protected _detachFn: (() => void) | null = null;

  attach<T>(componentType: Type<T>): ComponentRef<T>;
  attach<C>(templateRef: TemplateRef<C>): EmbeddedViewRef<C>;

  attach(element: Type<unknown> | TemplateRef<unknown>): ComponentRef<unknown> | EmbeddedViewRef<unknown> | void {
    if (element instanceof Type) {
      return this.attachComponent(element);
    }
    if (element instanceof TemplateRef) {
      return this.attachTemplate(element);
    }
  }

  abstract attachComponent<T>(componentType: Type<T>): ComponentRef<T>;

  abstract attachTemplate<C>(templateRef: TemplateRef<C>): EmbeddedViewRef<C>;

  detach(): void {
    if (this._detachFn) {
      this._detachFn();
      this._detachFn = null;
    }
  }
}
