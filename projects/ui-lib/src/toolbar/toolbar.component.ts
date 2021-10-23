import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-toolbar',
  exportAs: 'uiToolbar',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  @HostBinding('class') cssClass: string = 'ui-toolbar';
}
