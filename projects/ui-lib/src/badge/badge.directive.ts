import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[uiBadge]',
  exportAs: 'uiBadge',
  host: {
    'class': 'ui-badge'
  }
})
export class BadgeDirective implements OnInit {

  @Input('uiBadge') content: string | number | undefined | null;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.createBadgeElement();
  }

  private createBadgeElement(): void {
    const badgeElement = this.renderer.createElement('span');
    const contentClass = 'ui-badge-content';

    badgeElement.textContent = this.stringifyContent();
    badgeElement.classList.add(contentClass);

    this.elementRef.nativeElement.appendChild(badgeElement);
  }

  private stringifyContent(): string {
    return this.content == null ? '' : `${this.content}`;
  }
}
