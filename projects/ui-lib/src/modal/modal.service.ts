import { ComponentRef, Injectable, Type } from '@angular/core';

import { OverlayRef } from '../core/overlay/overlay-ref';
import { OverlayConfig } from '../core/overlay/overlay-config';
import { OverlayService } from '../core/overlay/overlay.service';
import { GlobalPositionStrategy } from '../core/overlay/position/global-position-strategy';

import { ModalConfig } from './modal-config';
import { ModalContainerComponent } from './modal-container.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _overlayRef!: OverlayRef;

  constructor(private readonly _overlayService: OverlayService) {}

  open<T>(componentType: Type<T>, config?: ModalConfig): ComponentRef<T> {
    const overlayConfig: OverlayConfig = this._createOverlayConfig(config);
    this._overlayRef = this._overlayService.create(overlayConfig);
    const modalContainerRef: ComponentRef<ModalContainerComponent> = this._overlayRef.attach(ModalContainerComponent);
    return modalContainerRef.instance.attach(componentType);
  }

  private _createOverlayConfig(config?: ModalConfig): OverlayConfig {
    return {
      positionStrategy: new GlobalPositionStrategy(),
      width: config?.width,
      height: config?.height,
      hasBackdrop: true,
    };
  }

  close(): void {
    this._overlayRef.detach();
  }
}
