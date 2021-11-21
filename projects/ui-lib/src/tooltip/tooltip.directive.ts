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

  @Input('uiTooltipOpenDelay') openDelay: number = 0;

  @Input('uiTooltipCloseDelay') closeDelay: number = 0;

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
      this.isOpen.bind(this),
      this.open.bind(this),
      this.close.bind(this),
      this.openDelay,
      this.closeDelay,
    );
  }

  ngOnDestroy(): void {
    this._triggersSubscription.unsubscribe();
  }

  isOpen(): boolean {
    return this._tooltipRef !== null;
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
