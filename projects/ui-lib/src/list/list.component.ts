import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-list',
  exportAs: 'uiList',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @HostBinding('class') cssClass: string = 'ui-list';
}
