import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-select',
  exportAs: 'uiSelect',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  host: {
    'class': 'ui-select'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    const el = this.elementRef.nativeElement;
    const parent = this.renderer.parentNode(this.elementRef.nativeElement);

    while (el.firstChild) {
      this.renderer.appendChild(parent, el.firstChild);
    }
    this.renderer.removeChild(parent, el, true);
  }
}
