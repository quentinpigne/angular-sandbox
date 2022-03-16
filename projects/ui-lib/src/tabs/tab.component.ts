import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'ui-tab',
  exportAs: 'uiTab',
  template: `<ng-template><ng-content></ng-content></ng-template>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent {
  @HostBinding('class') cssClass: string = 'ui-tab';

  @Input() label!: string;

  @ViewChild(TemplateRef, { static: true }) content!: TemplateRef<undefined>;
}
