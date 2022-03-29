import { ComponentRef, Injectable, Type } from '@angular/core';

import { OverlayRef } from '../core/overlay/overlay-ref';
import { OverlayService } from '../core/overlay/overlay.service';

import { ModalContainerComponent } from './modal-container.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _overlayRef!: OverlayRef;

  constructor(private readonly _overlayService: OverlayService) {}

  open<T>(componentType: Type<T>): ComponentRef<T> {
    this._overlayRef = this._overlayService.create();
    const modalContainerRef: ComponentRef<ModalContainerComponent> = this._overlayRef.attach(ModalContainerComponent);
    return modalContainerRef.instance.attach(componentType);
  }

  close(): void {
    this._overlayRef.detach();
  }
}
