import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  Injector,
  Input,
  OnInit,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';

import { TooltipComponent } from './tooltip.component';

@Directive({
  selector: '[uiTooltip]',
  exportAs: 'uiTooltip',
})
export class TooltipDirective implements OnInit {
  private _tooltipRef: ComponentRef<TooltipComponent> | null = null;

  @Input('uiTooltip') content: string = '';

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
  ) {}

  ngOnInit() {
    this.renderer.listen(this.elementRef.nativeElement, 'mouseenter', this.open.bind(this));
    this.renderer.listen(this.elementRef.nativeElement, 'mouseleave', this.close.bind(this));
  }

  open() {
    this._tooltipRef = this.viewContainerRef.createComponent(
      this.componentFactoryResolver.resolveComponentFactory<TooltipComponent>(TooltipComponent),
      this.viewContainerRef.length,
      this.injector,
      [[this.renderer.createText(this.content)]],
    );
  }

  close() {
    if (this._tooltipRef) {
      this.viewContainerRef.remove(this.viewContainerRef.indexOf(this._tooltipRef.hostView));
      this._tooltipRef = null;
    }
  }
}
