import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Inject,
  Input,
  OnInit,
  Optional,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { SelectComponent, UI_SELECT } from './select.component';

@Component({
  selector: 'ui-option',
  exportAs: 'uiOption',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionComponent implements AfterViewInit, OnInit {
  @HostBinding('class') cssClass: string = 'ui-option';

  @Input() value: unknown;
  @Input() disabled: boolean = false;

  @Input()
  get selected(): boolean {
    return this._selected;
  }
  set selected(value: boolean) {
    if (this._selected !== value) {
      this._selected = value;
      if (this._select) {
        this._select.value = this.value;
      }
    }
  }
  private _selected: boolean = false;

  private _select: SelectComponent;

  constructor(
    @Optional() @Inject(UI_SELECT) select: SelectComponent,
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {
    this._select = select;
  }

  ngOnInit(): void {
    if (this._select && this._select.value === this.value) {
      this.selected = true;
    }
  }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement as HTMLElement;
    const parent = this.renderer.parentNode(hostElement) as HTMLElement;

    while (hostElement.firstChild) {
      this.renderer.appendChild(parent, hostElement.firstChild);
    }
    this.renderer.removeChild(parent, hostElement, true);
  }
}
