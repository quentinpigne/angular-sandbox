import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-badge',
  exportAs: 'uiBadge',
  template: `<span>{{ content }}</span>`,
  styleUrls: ['./badge.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  @HostBinding('class') cssClass: string = 'ui-badge';

  @Input() content: string | number | undefined | null;
}
