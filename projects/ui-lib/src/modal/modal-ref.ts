import { OverlayRef } from '../core/overlay/overlay-ref';
import { ModalContainerComponent } from './modal-container.component';

export class ModalRef<T> {
  constructor(
    private _overlayRef: OverlayRef,
    private _containerInstance: ModalContainerComponent,
    private _contentInstance: T,
  ) {}

  close(): void {
    this._overlayRef.detach();
  }
}
