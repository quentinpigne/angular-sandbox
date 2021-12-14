import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OverlayContainerService {
  private _containerElement!: HTMLDivElement;
  private _document: Document;

  get containerElement(): HTMLDivElement {
    if (!this._containerElement) {
      this._createContainerElement();
    }
    return this._containerElement;
  }

  constructor(@Inject(DOCUMENT) document: Document) {
    this._document = document;
  }

  private _createContainerElement(): void {
    const CONTAINER_CLASS: string = 'ui-overlay-container';

    const container: HTMLDivElement = this._document.createElement('div');
    container.classList.add(CONTAINER_CLASS);

    this._document.body.appendChild(container);
    this._containerElement = container;
  }
}
