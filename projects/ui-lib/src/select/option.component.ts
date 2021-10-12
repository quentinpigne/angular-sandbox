import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'ui-option',
  exportAs: 'uiOption',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionComponent implements AfterViewInit {
  @HostBinding('class') cssClass: string = 'ui-option';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement as HTMLElement;
    const parent = this.renderer.parentNode(hostElement) as HTMLElement;

    while (hostElement.firstChild) {
      this.renderer.appendChild(parent, hostElement.firstChild);
    }
    this.renderer.removeChild(parent, hostElement, true);
  }
}
