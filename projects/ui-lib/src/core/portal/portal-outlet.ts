import { EmbeddedViewRef, TemplateRef, ViewContainerRef } from '@angular/core';

export class PortalOutlet {
  private _detachFn: (() => void) | null = null;

  constructor(private readonly _viewContainerRef: ViewContainerRef) {}

  attach<C>(templateRef: TemplateRef<C>): EmbeddedViewRef<C> {
    const viewRef: EmbeddedViewRef<C> = this._viewContainerRef.createEmbeddedView<C>(templateRef);
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
