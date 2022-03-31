import { ComponentRef, Type } from '@angular/core';

import { PortalOutlet } from '../portal/portal-outlet';
import { DomPortalOutlet } from '../portal/dom-portal-outlet';

import { OverlayConfig } from './overlay-config';

export class OverlayRef implements PortalOutlet {
  private _hostElement!: HTMLElement;
  private _backdropElement!: HTMLElement;

  constructor(private _document: Document, private _portalOutlet: DomPortalOutlet, private _config?: OverlayConfig) {}

  attach<T>(componentType: Type<T>): ComponentRef<T> {
    const componentRef: ComponentRef<T> = this._portalOutlet.attach(componentType);
    this._hostElement = componentRef.location.nativeElement as HTMLElement;

    this._updateElementSize();

    if (this._config?.hasBackdrop) this._attachBackdrop();

    return componentRef;
  }

  detach(): void {
    if (this._config?.hasBackdrop) this._detachBackdrop();
    this._portalOutlet.detach();
  }

  private _updateElementSize(): void {
    const style: CSSStyleDeclaration = this._hostElement.style;

    style.width = this._config?.width || '';
    style.height = this._config?.width || '';
    style.minWidth = this._config?.minWidth || '';
    style.minHeight = this._config?.minHeight || '';
    style.maxWidth = this._config?.maxWidth || '';
    style.maxHeight = this._config?.maxHeight || '';
  }

  private _attachBackdrop() {
    this._backdropElement = this._document.createElement('div');
    this._backdropElement.classList.add('ui-overlay-backdrop');

    this._hostElement.parentElement?.insertBefore(this._backdropElement, this._hostElement);
    this._backdropElement.addEventListener('click', () => this.detach());
  }

  private _detachBackdrop() {
    this._backdropElement.removeEventListener('click', () => this.detach());
    this._backdropElement.remove();
  }
}
