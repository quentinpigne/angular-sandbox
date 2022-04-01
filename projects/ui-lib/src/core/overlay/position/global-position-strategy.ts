import { OverlayRef } from '../overlay-ref';

import { PositionStrategy } from './position-strategy';

export class GlobalPositionStrategy implements PositionStrategy {
  private _overlayRef!: OverlayRef;

  attach(overlayRef: OverlayRef): void {
    this._overlayRef = overlayRef;
  }

  apply(): void {
    const hostElement: HTMLElement = this._overlayRef.hostElement;
    const styles: CSSStyleDeclaration = hostElement.style;

    styles.margin = 'auto';
  }
}
