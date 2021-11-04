import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

export type UiBadgePosition =
  | 'top left'
  | 'top right'
  | 'bottom left'
  | 'below right'
  | 'left'
  | 'right'
  | 'top'
  | 'bottom';

@Directive({
  selector: '[uiBadge]',
  exportAs: 'uiBadge',
})
export class BadgeDirective implements OnInit {
  @HostBinding('class') cssClass: string = 'ui-badge-host';

  @Input('uiBadgePosition')
  set position(newPosition: UiBadgePosition) {
    this.isTop = newPosition.indexOf('bottom') === -1;
    this.isBottom = !this.isTop;
    this.isRight = newPosition.indexOf('left') === -1;
    this.isLeft = !this.isRight;
  }

  @HostBinding('class.ui-badge-top') isTop: boolean = true;
  @HostBinding('class.ui-badge-bottom') isBottom: boolean = false;
  @HostBinding('class.ui-badge-right') isRight: boolean = true;
  @HostBinding('class.ui-badge-left') isLeft: boolean = false;

  @Input('uiBadge') content: string | number | undefined | null;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.createBadgeElement();
  }

  private createBadgeElement(): void {
    const badgeElement = this.renderer.createElement('span') as HTMLElement;

    badgeElement.textContent = this.stringifyContent();
    badgeElement.classList.add('ui-badge');
    badgeElement.classList.add('ui-badge-embedded');

    const hostElement = this.elementRef.nativeElement as HTMLElement;
    hostElement.appendChild(badgeElement);
  }

  private stringifyContent(): string {
    return this.content == null ? '' : `${this.content}`;
  }
}
