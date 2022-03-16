import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  HostBinding,
  QueryList,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';

import { TabComponent } from './tab.component';

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

  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  ngAfterViewInit(): void {
    const firstTab: TabComponent | undefined = this.tabs.get(0);
    if (firstTab) {
      this.tabContainer.createEmbeddedView(firstTab.content);
    }
  }

  tabClicked(index: number): void {
    const selectedTab: TabComponent | undefined = this.tabs.get(index);
    if (selectedTab) {
      this.tabContainer.clear();
      this.tabContainer.createEmbeddedView(selectedTab.content);
    }
  }
}
