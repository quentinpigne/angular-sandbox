import { OverlayRef } from '../core/overlay/overlay-ref';
import { GlobalPositionStrategy } from '../core/overlay/position/global-position-strategy';

import { ModalContainerComponent } from './modal-container.component';

export class ModalRef<T> {
  constructor(
    private _overlayRef: OverlayRef,
    private _containerInstance: ModalContainerComponent,
    private _contentInstance: T,
  ) {
    _overlayRef.backdropClick.subscribe(() => {
      this.close();
    });
  }

  close(): void {
    this._overlayRef.detach();
  }

  updatePosition(): void {
    const positionStrategy: GlobalPositionStrategy = this._overlayRef.positionStrategy as GlobalPositionStrategy;
    positionStrategy.centerHorizontally();
    positionStrategy.centerVertically();
    positionStrategy.apply();
  }
}
