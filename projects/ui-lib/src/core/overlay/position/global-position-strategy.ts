import { OverlayRef } from '../overlay-ref';

import { PositionStrategy } from './position-strategy';

const globalHostClass: string = 'ui-global-overlay-host';

export class GlobalPositionStrategy implements PositionStrategy {
  private _overlayRef!: OverlayRef;
  private _alignItems?: string;
  private _justifyContent?: string;

  attach(overlayRef: OverlayRef): void {
    this._overlayRef = overlayRef;
    overlayRef.hostElement.classList.add(globalHostClass);
  }

  centerHorizontally(): void {
    this._justifyContent = 'center';
  }

  centerVertically(): void {
    this._alignItems = 'center';
  }

  apply(): void {
    const hostElement: HTMLElement = this._overlayRef.hostElement;
    const styles: CSSStyleDeclaration = hostElement.style;

    styles.justifyContent = this._justifyContent || '';
    styles.alignItems = this._alignItems || '';
  }
}
