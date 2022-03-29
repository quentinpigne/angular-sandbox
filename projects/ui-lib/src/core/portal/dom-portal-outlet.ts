import {
  ApplicationRef,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injector,
  TemplateRef,
  Type,
  ViewContainerRef,
} from '@angular/core';

import { BasePortalOutlet } from './portal-outlet';

export class DomPortalOutlet extends BasePortalOutlet {
  constructor(
    private readonly _element: HTMLElement,
    private readonly _injector: Injector,
    private readonly _applicationRef: ApplicationRef,
    private readonly _componentFactoryResolver: ComponentFactoryResolver,
    private readonly _viewContainerRef?: ViewContainerRef,
  ) {
    super();
  }

  attachComponent<T>(componentType: Type<T>): ComponentRef<T> {
    let componentRef: ComponentRef<T>;
    if (this._viewContainerRef) {
      componentRef = this._viewContainerRef.createComponent(componentType, {
        index: this._viewContainerRef.length,
        injector: this._injector,
      });
      this._detachFn = () => componentRef.destroy();
    } else {
      const componentFactory: ComponentFactory<T> =
        this._componentFactoryResolver.resolveComponentFactory(componentType);
      componentRef = componentFactory.create(this._injector);
      this._applicationRef.attachView(componentRef.hostView);
      this._detachFn = () => {
        this._applicationRef.detachView(componentRef.hostView);
        componentRef.destroy();
      };
    }
    this._element.appendChild(componentRef.location.nativeElement);
    return componentRef;
  }

  attachTemplate<C>(templateRef: TemplateRef<C>): EmbeddedViewRef<C> {
    let embeddedViewRef: EmbeddedViewRef<C>;
    if (this._viewContainerRef) {
      embeddedViewRef = this._viewContainerRef.createEmbeddedView(templateRef);
      this._detachFn = () => {
        const index: number | undefined = this._viewContainerRef?.indexOf(embeddedViewRef);
        this._viewContainerRef?.remove(index);
      };
    } else {
      embeddedViewRef = templateRef.createEmbeddedView({} as C);
      this._applicationRef.attachView(embeddedViewRef);
      this._detachFn = () => this._applicationRef.detachView(embeddedViewRef);
    }
    return embeddedViewRef;
  }
}