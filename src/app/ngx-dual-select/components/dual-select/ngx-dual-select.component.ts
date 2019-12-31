import { Component, OnInit } from '@angular/core';


export interface Item {
  title: string;
  subtitle?: string;
  active: boolean
}

@Component({
  selector: 'app-ngx-dual-select',
  inputs: [
    "leftTitle",
    "rightTitle"
  ],
  templateUrl: './ngx-dual-select.component.html',
  styleUrls: ['./ngx-dual-select.component.scss']
})
export class NgxDualSelectComponent implements OnInit {

  leftTitle: string;
  rightTitle: string;
  listItems: Item[] = [];
  listItemsSelected: Item[] = [];

  constructor() { }

  ngOnInit() {
    this.mockLoadItems();
  }

  private mockLoadItems() {
    this.listItems.push(
      { title: 'SETOR - CONTROLADORIA GERAL', subtitle: '2893 Usuários Activos', active: false },
      { title: 'SETOR - CONTROLADORIA DE PROCESSOS', subtitle: '2893 Usuários Activos', active: false }
    );
  }


  selectItem(item: Item) {
    item.active = !item.active;
  }

  moveSelected(direction: string) {
    switch (direction) {
      case 'right':
        this.moveSelectedRight();
        break;
      case 'left':
        this.moveSelectedLeft();
        break;
    }
  }


  private moveSelectedRight() {
    this.listItems.forEach((item, key) => {
      if (item.active) {
        if (this.listItemsSelected.indexOf(item) <= -1) {
          item.active = false;
          this.listItemsSelected.push(item);
          this.listItems.splice(key, 1);
        }
      }
    });
  }

  private moveSelectedLeft() {
    this.listItemsSelected.forEach((item, key) => {
      if (item.active) {
        if (this.listItems.indexOf(item) <= -1) {
          item.active = false;
          this.listItems.push(item);
          this.listItemsSelected.splice(key, 1);
        }
      }
    });
  }
}
