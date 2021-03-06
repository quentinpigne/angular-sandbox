import { Observable, Subject } from 'rxjs';

import { OverlayRef } from '../core/overlay/overlay-ref';
import { GlobalPositionStrategy } from '../core/overlay/position/global-position-strategy';

import { ModalContainerComponent } from './modal-container.component';

export class ModalRef<T, R> {
  private _modalInstance!: T;

  set modalInstance(modalInstance: T) {
    this._modalInstance = modalInstance;
  }

  private _afterClosed: Subject<R | undefined> = new Subject<R | undefined>();

  get afterClosed(): Observable<R | undefined> {
    return this._afterClosed.asObservable();
  }

  constructor(private _overlayRef: OverlayRef, private _containerInstance: ModalContainerComponent) {
    _overlayRef.backdropClick.subscribe(() => {
      this.close();
    });
    _overlayRef.keyboardEvents.subscribe((event: KeyboardEvent) => {
      if (event.key === 'Escape') this.close();
    });
  }

  close(data?: R): void {
    this._afterClosed.next(data);
    this._afterClosed.complete();
    this._overlayRef.detach();
  }

  updatePosition(): void {
    const positionStrategy: GlobalPositionStrategy = this._overlayRef.positionStrategy as GlobalPositionStrategy;
    positionStrategy.centerHorizontally();
    positionStrategy.centerVertically();
    positionStrategy.apply();
  }
}
