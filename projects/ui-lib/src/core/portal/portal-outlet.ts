import { EmbeddedViewRef, TemplateRef, ViewContainerRef } from '@angular/core';

export class PortalOutlet {
  private _viewContainerRef: ViewContainerRef;

  private _detachFn: (() => void) | null = null;

  constructor(viewContainerRef: ViewContainerRef) {
    this._viewContainerRef = viewContainerRef;
  }

  attach<C>(template: TemplateRef<C>): EmbeddedViewRef<C> {
    const viewRef: EmbeddedViewRef<C> = this._viewContainerRef.createEmbeddedView<C>(template);
    this._detachFn = () => {
      const index: number = this._viewContainerRef.indexOf(viewRef);
      this._viewContainerRef.remove(index);
    };
    return viewRef;
  }

  detach(): void {
    if (this._detachFn) {
      this._detachFn();
      this._detachFn = null;
    }
  }
}
