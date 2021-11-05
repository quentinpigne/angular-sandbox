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

  @Input('uiBadge')
  get content(): string | number | undefined | null {
    return this._content;
  }
  set content(newContent: string | number | undefined | null) {
    this._content = newContent;
    this.updateBadgeElement(newContent);
  }
  private _content: string | number | undefined | null;

  private _badgeElement: HTMLSpanElement | undefined;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (!this._badgeElement) {
      this._badgeElement = this.createBadgeElement();
      this.updateBadgeElement(this.content);
    }
  }

  private createBadgeElement(): HTMLSpanElement {
    const badgeElement = this.renderer.createElement('span') as HTMLSpanElement;

    badgeElement.classList.add('ui-badge');
    badgeElement.classList.add('ui-badge-embedded');

    const hostElement = this.elementRef.nativeElement as HTMLElement;
    hostElement.appendChild(badgeElement);

    return badgeElement;
  }

  private updateBadgeElement(newContent: string | number | undefined | null): void {
    if (this._badgeElement) {
      this._badgeElement.textContent = this.normalizeContent(newContent);
    }
  }

  private normalizeContent(content: string | number | undefined | null): string {
    return content == null ? '' : `${content}`;
  }
}
