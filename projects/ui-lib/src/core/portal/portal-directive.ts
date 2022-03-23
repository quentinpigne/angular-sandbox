import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import { PortalOutlet } from './portal-outlet';

@Directive({
  selector: '[uiPortalOutlet]',
  exportAs: 'uiPortalOutlet',
})
export class PortalOutletDirective extends PortalOutlet {
  @Input('uiPortalOutlet')
  set templateRef(newTemplateRef: TemplateRef<unknown> | null | undefined) {
    if (newTemplateRef) {
      this.detach();
      this.attach(newTemplateRef);
    }
  }

  constructor(_viewContainerRef: ViewContainerRef) {
    super(_viewContainerRef);
  }
}
