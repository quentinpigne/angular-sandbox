import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  HostBinding,
  Input,
  QueryList,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';

import { PortalOutlet } from '../core/portal/portal-outlet';

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

  @Input()
  get selectedTab(): number {
    return this._selectedTab;
  }
  set selectedTab(index: number) {
    if (this._selectedTab !== index) {
      this._selectedTab = index;
      this.changeTab(index);
    }
  }
  private _selectedTab: number = 0;

  private _portalOutlet!: PortalOutlet;

  @ViewChild('vcr', { read: ViewContainerRef }) tabContainer!: ViewContainerRef;

  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  ngAfterViewInit(): void {
    this._portalOutlet = new PortalOutlet(this.tabContainer);
    this.changeTab(this._selectedTab);
  }

  changeTab(index: number): void {
    const selectedTab: TabComponent | undefined = this.tabs?.get(index);
    if (selectedTab) {
      this._portalOutlet.detach();
      this._portalOutlet.attach(selectedTab.content);
    }
  }
}
