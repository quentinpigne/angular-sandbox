import { DOCUMENT } from '@angular/common';
import {
  ComponentRef,
  Directive,
  ElementRef,
  Inject,
  Injector,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { PopupService } from '../core/popup/popup.service';
import { Position, positionElement } from '../core/positioning/positioning';
import { listenToTriggers } from '../core/triggers/triggers';

import { TooltipComponent } from './tooltip.component';

@Directive({
  selector: '[uiTooltip]',
  exportAs: 'uiTooltip',
})
export class TooltipDirective implements OnInit, OnDestroy {
  private _popupService!: PopupService<TooltipComponent>;
  private _tooltipRef: ComponentRef<TooltipComponent> | null = null;
  private _triggersSubscription!: Subscription;

  @Input('uiTooltip')
  get content(): string {
    return this._content;
  }
  set content(newContent: string) {
    this._content = newContent != null ? String(newContent).trim() : '';
    this._updateTooltipContent();
  }
  private _content: string = '';

  @Input('uiTooltipPosition') position: Position = 'bottom';

  @Input('uiTooltipOpenDelay') openDelay: number = 0;

  @Input('uiTooltipCloseDelay') closeDelay: number = 0;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private injector: Injector,
    private viewContainerRef: ViewContainerRef,
    @Inject(DOCUMENT) private document: Document,
    private ngZone: NgZone,
  ) {}

  ngOnInit(): void {
    this._popupService = new PopupService(this.injector, TooltipComponent, this.viewContainerRef, this.document);
    this._triggersSubscription = listenToTriggers(
      this.renderer,
      this.elementRef.nativeElement,
      this.isOpen.bind(this),
      this.open.bind(this),
      this.close.bind(this),
      this.openDelay,
      this.closeDelay,
    );
    this.ngZone.onStable.subscribe(() => {
      if (this._tooltipRef) {
        positionElement(
          this.elementRef.nativeElement,
          this._tooltipRef.location.nativeElement as HTMLElement,
          this.position,
        );
      }
    });
  }

  ngOnDestroy(): void {
    this._triggersSubscription.unsubscribe();
  }

  isOpen(): boolean {
    return this._tooltipRef !== null;
  }

  open() {
    this._tooltipRef = this._popupService.open();
    this._updateTooltipContent();
  }

  close() {
    this._popupService.close();
    this._tooltipRef = null;
  }

  private _updateTooltipContent(): void {
    if (this._tooltipRef) {
      const tooltipInstance: TooltipComponent = this._tooltipRef.instance;
      tooltipInstance.content = this.content;
      tooltipInstance.markForCheck();
    }
  }
}
