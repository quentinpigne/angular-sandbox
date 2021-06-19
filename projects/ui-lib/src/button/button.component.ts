import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[ui-button]',
  exportAs: 'uiButton',
  template: `
    <ng-content></ng-content>
  `,
  host: {
    'class': 'ui-button',
    '[attr.disabled]': 'disabled || null'
  },
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  @Input()
  disabled: boolean = false;

  constructor() { }

}
