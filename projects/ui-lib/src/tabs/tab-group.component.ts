import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'ui-tab-group',
  exportAs: 'uiTabGroup',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabGroupComponent implements AfterViewInit {
  @HostBinding('class') cssClass: string = 'ui-tab-group';

  @ViewChild('vcr', { read: ViewContainerRef }) tabContainer!: ViewContainerRef;

  @ViewChild('tab1') tab1!: TemplateRef<unknown>;
  @ViewChild('tab2') tab2!: TemplateRef<unknown>;
  @ViewChild('tab3') tab3!: TemplateRef<unknown>;

  ngAfterViewInit(): void {
    this.tabContainer.createEmbeddedView(this.tab1);
  }

  tabClicked(index: number): void {
    const tabs = [this.tab1, this.tab2, this.tab3];
    this.tabContainer.clear();
    this.tabContainer.createEmbeddedView(tabs[index - 1]);
  }
}
