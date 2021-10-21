import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-badge',
  exportAs: 'uiBadge',
  template: `<span>{{ value }}</span>`,
  styleUrls: ['./badge.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  @HostBinding('class') cssClass: string = 'ui-badge';

  @Input() value: string | number | undefined | null;
}
