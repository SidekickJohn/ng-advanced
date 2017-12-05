import {TabComponent} from "../tab.component";
import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList
} from "@angular/core";

@Component({
  selector: 'tabbed-pane',
  templateUrl: './tabbed-pane.component.html'
})
export class TabbedPaneComponent implements OnInit, OnDestroy, AfterContentInit {

  @Input() activeId: number;
  @Output() activeIdChange = new EventEmitter<number>();

  currentTab: TabComponent;

  @ContentChildren(TabComponent)
  tabList: QueryList<TabComponent>;


  get tabs() {
    if (!this.tabList) return [];
    return this.tabList.toArray();
  }

  activate(id: number) {
    this.activeId = id;
    this.tabs.forEach(tab => {
      if (tab.id == this.activeId) {
        tab.active = true;
        this.currentTab = tab;
      }
      else {
        tab.active = false;
      }
    });
    this.activeIdChange.next(id);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.activate(this.activeId);
  }

  ngOnDestroy(): void {
  }

}
