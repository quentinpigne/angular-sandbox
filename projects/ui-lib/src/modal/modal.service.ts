import {
  ApplicationRef,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector,
  Type,
} from '@angular/core';

import { OverlayContainerService } from '../core/overlay/overlay-container.service';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _closeFn: (() => void) | null = null;

  constructor(
    private readonly _injector: Injector,
    private readonly _applicationRef: ApplicationRef,
    private readonly _componentFactoryResolver: ComponentFactoryResolver,
    private readonly _overlayContainerService: OverlayContainerService,
  ) {}

  open<T>(type: Type<T>): ComponentRef<T> {
    const componentFactory: ComponentFactory<T> = this._componentFactoryResolver.resolveComponentFactory(type);
    const componentRef: ComponentRef<T> = componentFactory.create(this._injector);
    this._applicationRef.attachView(componentRef.hostView);
    this._closeFn = () => {
      this._applicationRef.detachView(componentRef.hostView);
    };
    this._overlayContainerService.containerElement.appendChild(componentRef.location.nativeElement);
    return componentRef;
  }

  close(): void {
    if (this._closeFn) {
      this._closeFn();
      this._closeFn = null;
    }
  }
}
