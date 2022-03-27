import {
  ApplicationRef,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injector,
  Type,
} from '@angular/core';

export class DomPortalOutlet {
  private _detachFn: (() => void) | null = null;

  constructor(
    private readonly _element: HTMLElement,
    private readonly _injector: Injector,
    private readonly _applicationRef: ApplicationRef,
    private readonly _componentFactoryResolver: ComponentFactoryResolver,
  ) {}

  attach<T>(componentType: Type<T>): ComponentRef<T> {
    const componentFactory: ComponentFactory<T> = this._componentFactoryResolver.resolveComponentFactory(componentType);
    const componentRef: ComponentRef<T> = componentFactory.create(this._injector);
    this._applicationRef.attachView(componentRef.hostView);
    this._detachFn = () => {
      this._applicationRef.detachView(componentRef.hostView);
    };
    this._element.appendChild(componentRef.location.nativeElement);
    return componentRef;
  }

  detach(): void {
    if (this._detachFn) {
      this._detachFn();
      this._detachFn = null;
    }
  }
}
