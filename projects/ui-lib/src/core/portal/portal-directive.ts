import {
  ComponentRef,
  Directive,
  EmbeddedViewRef,
  Injector,
  Input,
  TemplateRef,
  Type,
  ViewContainerRef,
} from '@angular/core';

import { BasePortalOutlet } from './portal-outlet';

@Directive({
  selector: '[uiPortalOutlet]',
  exportAs: 'uiPortalOutlet',
})
export class PortalOutletDirective extends BasePortalOutlet {
  @Input('uiPortalOutlet')
  set templateRef(newTemplateRef: TemplateRef<unknown> | null | undefined | '') {
    if (newTemplateRef) {
      this.detach();
      this.attach(newTemplateRef);
    }
  }

  constructor(private readonly _injector: Injector, private readonly _viewContainerRef: ViewContainerRef) {
    super();
  }

  attachComponent<T>(componentType: Type<T>, injector?: Injector): ComponentRef<T> {
    const componentRef: ComponentRef<T> = this._viewContainerRef.createComponent(componentType, {
      index: this._viewContainerRef.length,
      injector: injector || this._injector,
    });
    this._detachFn = () => componentRef.destroy();
    return componentRef;
  }

  attachTemplate<C>(templateRef: TemplateRef<C>): EmbeddedViewRef<C> {
    const embeddedViewRef: EmbeddedViewRef<C> = this._viewContainerRef.createEmbeddedView<C>(templateRef);
    this._detachFn = () => {
      const index: number = this._viewContainerRef.indexOf(embeddedViewRef);
      this._viewContainerRef.remove(index);
    };
    return embeddedViewRef;
  }
}
