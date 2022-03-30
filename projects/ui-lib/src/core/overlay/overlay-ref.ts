import { ComponentRef, Type } from '@angular/core';

import { PortalOutlet } from '../portal/portal-outlet';
import { DomPortalOutlet } from '../portal/dom-portal-outlet';

export class OverlayRef implements PortalOutlet {
  private _hostElement!: HTMLElement;
  private _backdropElement!: HTMLElement;

  constructor(private _document: Document, private _portalOutlet: DomPortalOutlet) {}

  attach<T>(componentType: Type<T>): ComponentRef<T> {
    const componentRef: ComponentRef<T> = this._portalOutlet.attach(componentType);
    this._hostElement = componentRef.location.nativeElement as HTMLElement;
    this._attachBackdrop();
    return componentRef;
  }

  detach(): void {
    this._detachBackdrop();
    this._portalOutlet.detach();
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
