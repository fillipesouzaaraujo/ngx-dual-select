import { OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
export interface Item {
    title: string;
    subtitle?: string;
    active: boolean;
    compare: any;
}
export declare class NgxDualSelectComponent implements OnInit, OnChanges {
    leftTitle: string;
    rightTitle: string;
    listA: Array<any>;
    titleItem: string;
    subTitleItem?: string;
    buttonClass?: string;
    selectedItems: EventEmitter<Array<any>>;
    listItems: Item[];
    listItemsSelected: Item[];
    searchTextA: string;
    searchTextB: string;
    constructor();
    ngOnInit(): void;
    ngOnChanges($event: SimpleChanges): void;
    private mockLoadItems;
    private emitSelectedItems;
    selectItem(item: Item): void;
    moveSelected(direction: string, all: boolean): void;
    orderBy(list: Array<any>, field?: string): Array<any>;
    private moveSelectedRight;
    private moveSelectedLeft;
}
