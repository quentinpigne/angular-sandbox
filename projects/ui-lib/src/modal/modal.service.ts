import { ComponentRef, Injectable, OnDestroy, Type } from '@angular/core';

import { OverlayRef } from '../core/overlay/overlay-ref';
import { OverlayConfig } from '../core/overlay/overlay-config';
import { OverlayService } from '../core/overlay/overlay.service';
import { GlobalPositionStrategy } from '../core/overlay/position/global-position-strategy';

import { ModalRef } from './modal-ref';
import { ModalConfig } from './modal-config';
import { ModalContainerComponent } from './modal-container.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService implements OnDestroy {
  private _openModal: ModalRef<unknown, unknown> | null = null;

  constructor(private readonly _overlayService: OverlayService) {}

  ngOnDestroy(): void {
    this._openModal?.close();
  }

  open<T, R>(componentType: Type<T>, config?: ModalConfig): ModalRef<T, R> {
    const overlayRef: OverlayRef = this._createOverlay(config);
    const modalContainer: ModalContainerComponent = this._attachModalContainer(overlayRef);
    const modalRef: ModalRef<T, R> = this._attachModal<T, R>(overlayRef, modalContainer, componentType);
    this._openModal = modalRef as ModalRef<unknown, unknown>;
    return modalRef;
  }

  private _createOverlay(config?: ModalConfig): OverlayRef {
    const overlayConfig: OverlayConfig = this._createOverlayConfig(config);
    return this._overlayService.create(overlayConfig);
  }

  private _createOverlayConfig(config?: ModalConfig): OverlayConfig {
    return {
      positionStrategy: new GlobalPositionStrategy(),
      width: config?.width,
      height: config?.height,
      hasBackdrop: true,
    };
  }

  private _attachModalContainer(overlayRef: OverlayRef): ModalContainerComponent {
    const modalContainerRef: ComponentRef<ModalContainerComponent> = overlayRef.attach(ModalContainerComponent);
    return modalContainerRef.instance;
  }

  private _attachModal<T, R>(
    overlayRef: OverlayRef,
    modalContainer: ModalContainerComponent,
    componentType: Type<T>,
  ): ModalRef<T, R> {
    const modalContentRef: ComponentRef<T> = modalContainer.attach(componentType);
    const modalRef: ModalRef<T, R> = new ModalRef(overlayRef, modalContainer, modalContentRef.instance);
    modalRef.updatePosition();
    return modalRef;
  }
}
