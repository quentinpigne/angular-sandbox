import { OverlayRef } from '../overlay-ref';

import { PositionStrategy } from './position-strategy';

const globalHostClass: string = 'ui-global-overlay-host';

export class GlobalPositionStrategy implements PositionStrategy {
  private _overlayRef!: OverlayRef;

  attach(overlayRef: OverlayRef): void {
    this._overlayRef = overlayRef;
    overlayRef.hostElement.classList.add(globalHostClass);
  }

  apply(): void {
    const hostElement: HTMLElement = this._overlayRef.hostElement;
    const styles: CSSStyleDeclaration = hostElement.style;

    styles.justifyContent = 'center';
    styles.alignItems = 'center';
  }
}
