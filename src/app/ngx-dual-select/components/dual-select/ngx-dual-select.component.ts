import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';


export interface Item {
  title: string;
  subtitle?: string;
  active: boolean,
  compare: any
}

@Component({
  selector: 'app-ngx-dual-select',
  templateUrl: './ngx-dual-select.component.html',
  styleUrls: ['./ngx-dual-select.component.scss']
})
export class NgxDualSelectComponent implements OnInit, OnChanges {

  @Input() leftTitle: string;
  @Input() rightTitle: string;
  @Input() listA: Array<any>;
  @Input() titleItem: string;
  @Input() subTitleItem?: string;
  @Input() buttonClass?: string;
  @Output() selectedItems: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();
  listItems: Item[] = [];
  listItemsSelected: Item[] = [];
  searchTextA = '';
  searchTextB = '';

  constructor() { }

  ngOnInit() {
    this.mockLoadItems();
  }

  ngOnChanges($event: SimpleChanges) {
    if ($event.listA.currentValue) {
      this.listA.forEach(item => {
        this.listItems.push(
          { title: item[this.titleItem], subtitle: (this.subTitleItem) ? item[this.subTitleItem] : null, active: false, compare: item }
        );
      });
    }
  }

  private mockLoadItems() {

  }


  private emitSelectedItems() {
    const listB: Array<any> = [];
    this.listItemsSelected.forEach(item => {
      this.listA.forEach(itemA => {
        if (item.compare === itemA) {
          listB.push(itemA);
        }
      });
    });
    this.selectedItems.emit(listB);
  }

  selectItem(item: Item) {
    item.active = !item.active;
  }

  moveSelected(direction: string, all: boolean) {
    switch (direction) {
      case 'right':
        this.moveSelectedRight(all);
        break;
      case 'left':
        this.moveSelectedLeft(all);
        break;
    }
  }


  orderBy(list: Array<any>, field?: string): Array<any> {
    if (field) {
      return list.sort((n1, n2) => {
        if (n1[field] > n2[field]) {
          return 1;
        }
        if (n1[field] < n2[field]) {
          return -1;
        }
        return 0;
      });
    } else {
      return list;
    }
  }


  private moveSelectedRight(all: boolean) {
    this.listItems.forEach((item, key) => {
      if (!all) {
        if (item.active) {
          if (this.listItemsSelected.indexOf(item) <= -1) {
            item.active = false;
            this.listItemsSelected.push(item);
          }
        }
      } else {
        item.active = false;
        this.listItemsSelected.push(item);
      }
    });
    this.listItems = this.listItems.filter(item => {
      if (this.listItemsSelected.indexOf(item) === -1) {
        return item;
      }
    });
    this.emitSelectedItems();
  }

  private moveSelectedLeft(all: boolean) {
    this.listItemsSelected.forEach((item, key) => {
      if (!all) {
        if (item.active) {
          if (this.listItems.indexOf(item) <= -1) {
            item.active = false;
            this.listItems.push(item);
          }
        }
      } else {
        item.active = false;
        this.listItems.push(item);
      }
    });
    this.listItemsSelected = this.listItemsSelected.filter(item => {
      if (this.listItems.indexOf(item) === -1) {
        return item;
      }
    });
    this.emitSelectedItems();
  }
}
