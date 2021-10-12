import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[uiBadge]',
  exportAs: 'uiBadge',
})
export class BadgeDirective implements OnInit {
  @HostBinding('class') cssClass: string = 'ui-badge';

  @Input('uiBadge') content: string | number | undefined | null;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.createBadgeElement();
  }

  private createBadgeElement(): void {
    const badgeElement = this.renderer.createElement('span') as HTMLElement;
    const contentClass = 'ui-badge-content';

    badgeElement.textContent = this.stringifyContent();
    badgeElement.classList.add(contentClass);

    const hostElement = this.elementRef.nativeElement as HTMLElement;
    hostElement.appendChild(badgeElement);
  }

  private stringifyContent(): string {
    return this.content == null ? '' : `${this.content}`;
  }
}
