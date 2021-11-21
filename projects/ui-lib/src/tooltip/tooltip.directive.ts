import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { listenToTriggers } from '../core/triggers/triggers';

import { TooltipComponent } from './tooltip.component';

@Directive({
  selector: '[uiTooltip]',
  exportAs: 'uiTooltip',
})
export class TooltipDirective implements OnInit, OnDestroy {
  private _tooltipRef: ComponentRef<TooltipComponent> | null = null;
  private _triggersSubscription!: Subscription;

  @Input('uiTooltip') content: string = '';

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
  ) {}

  ngOnInit(): void {
    this._triggersSubscription = listenToTriggers(
      this.renderer,
      this.elementRef.nativeElement,
      this.open.bind(this),
      this.close.bind(this),
    );
  }

  ngOnDestroy(): void {
    this._triggersSubscription.unsubscribe();
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
