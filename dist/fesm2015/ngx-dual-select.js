import { __decorate } from 'tslib';
import { EventEmitter, Input, Output, Component, Pipe, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

let NgxDualSelectComponent = class NgxDualSelectComponent {
    constructor() {
        this.selectedItems = new EventEmitter();
        this.listItems = [];
        this.listItemsSelected = [];
        this.searchTextA = '';
        this.searchTextB = '';
    }
    ngOnInit() {
        this.mockLoadItems();
    }
    ngOnChanges($event) {
        if ($event.listA.currentValue) {
            this.listA.forEach(item => {
                this.listItems.push({ title: item[this.titleItem], subtitle: (this.subTitleItem) ? item[this.subTitleItem] : null, active: false, compare: item });
            });
        }
    }
    mockLoadItems() {
    }
    emitSelectedItems() {
        const listB = [];
        this.listItemsSelected.forEach(item => {
            this.listA.forEach(itemA => {
                if (item.compare === itemA) {
                    listB.push(itemA);
                }
            });
        });
        this.selectedItems.emit(listB);
    }
    selectItem(item) {
        item.active = !item.active;
    }
    moveSelected(direction, all) {
        switch (direction) {
            case 'right':
                this.moveSelectedRight(all);
                break;
            case 'left':
                this.moveSelectedLeft(all);
                break;
        }
    }
    orderBy(list, field) {
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
        }
        else {
            return list;
        }
    }
    moveSelectedRight(all) {
        this.listItems.forEach((item, key) => {
            if (!all) {
                if (item.active) {
                    if (this.listItemsSelected.indexOf(item) <= -1) {
                        item.active = false;
                        this.listItemsSelected.push(item);
                    }
                }
            }
            else {
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
    moveSelectedLeft(all) {
        this.listItemsSelected.forEach((item, key) => {
            if (!all) {
                if (item.active) {
                    if (this.listItems.indexOf(item) <= -1) {
                        item.active = false;
                        this.listItems.push(item);
                    }
                }
            }
            else {
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
};
__decorate([
    Input()
], NgxDualSelectComponent.prototype, "leftTitle", void 0);
__decorate([
    Input()
], NgxDualSelectComponent.prototype, "rightTitle", void 0);
__decorate([
    Input()
], NgxDualSelectComponent.prototype, "listA", void 0);
__decorate([
    Input()
], NgxDualSelectComponent.prototype, "titleItem", void 0);
__decorate([
    Input()
], NgxDualSelectComponent.prototype, "subTitleItem", void 0);
__decorate([
    Input()
], NgxDualSelectComponent.prototype, "buttonClass", void 0);
__decorate([
    Output()
], NgxDualSelectComponent.prototype, "selectedItems", void 0);
NgxDualSelectComponent = __decorate([
    Component({
        selector: 'app-ngx-dual-select',
        template: "<div class=\"container\">\n  <div class=\"box left\">\n    <div class=\"title\">{{leftTitle}}</div>\n    <div class=\"search\">\n      <input type=\"text\" [(ngModel)]=\"searchTextA\" placeholder=\"Pesquisar\" />\n    </div>\n    <div class=\"items customScrollBar\">\n      <div (click)=\"selectItem(item)\" class=\"item\" *ngFor=\"let item of orderBy(listItems, 'title') | filter : searchTextA : 'title'\" [ngClass]=\"{'active': item.active}\">\n        {{item.title}}\n        <small *ngIf=\"item.subtitle\">{{item.subtitle}}</small>\n      </div>\n    </div>\n    <div class=\"items-footer\" *ngIf=\"(listItems | filter : searchTextA : 'title').length > 0\">\n      <small>Total de {{listItems.length}} Itens</small>\n    </div>\n    <div class=\"items-footer\" *ngIf=\"(listItems | filter : searchTextA : 'title').length === 0 && searchTextA\">\n      <small>Nenhum resultado encontrado!</small>\n    </div>\n  </div>\n  <div class=\"box center\">\n    <div class=\"actions\">\n      <button [class]=\"buttonClass\" type=\"button\" (click)=\"moveSelected('right', true)\">&gt;&gt;</button>\n      <button [class]=\"buttonClass\" type=\"button\" (click)=\"moveSelected('right', false)\">&gt;</button>\n      <div class=\"divider\"></div>\n      <button [class]=\"buttonClass\" type=\"button\" (click)=\"moveSelected('left', false)\">&lt;</button>\n      <button [class]=\"buttonClass\" type=\"button\" (click)=\"moveSelected('left', true)\">&lt;&lt;</button>\n    </div>\n  </div>\n  <div class=\"box right\">\n    <div class=\"title\">{{rightTitle}}</div>\n    <div class=\"search\">\n      <input type=\"text\" [(ngModel)]=\"searchTextB\" placeholder=\"Pesquisar\" />\n    </div>\n    <div class=\"items customScrollBar\" *ngIf=\"listItemsSelected.length > 0\">\n      <div (click)=\"selectItem(item)\" class=\"item\" *ngFor=\"let item of  orderBy(listItemsSelected, 'title') | filter : searchTextB : 'title'\" [ngClass]=\"{'active': item.active}\">\n        {{item.title}}\n        <small *ngIf=\"item.subtitle\">{{item.subtitle}}</small>\n      </div>\n    </div>\n    <div class=\"items-footer\" *ngIf=\"(listItemsSelected | filter : searchTextB : 'title').length > 0\">\n      <small>Total de {{listItemsSelected.length}} Itens</small>\n    </div>\n    <div class=\"items-footer\" *ngIf=\"(listItemsSelected | filter : searchTextB : 'title').length === 0 && searchTextB\">\n      <small>Nenhum resultado encontrado!</small>\n    </div>\n  </div>\n</div>",
        styles: [".customScrollBar::-webkit-scrollbar{width:4px}.customScrollBar::-webkit-scrollbar-track{background:#f1f1f1}.customScrollBar::-webkit-scrollbar-thumb{background:#888}.customScrollBar::-webkit-scrollbar-thumb:hover{background:#555}.container{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:top;align-items:top;-webkit-box-pack:center;justify-content:center;background:#f8f8f8}.container .divider{display:block;border-top:1px solid #e9e9e9;margin:20px 0}.container .box{-webkit-box-flex:1;flex-grow:1;flex:1 1 30%;height:auto}.container .box .search{display:-webkit-box;display:flex}.container .box .search input{display:block;width:100%;margin-bottom:10px;padding:5px 10px;font-size:14px;outline:0}.container .box .items-footer{text-align:center;font-size:12px;color:#888;display:block;margin:5px 0 0}.container .box .items{background:#fff;border:1px solid #eee;max-height:300px;overflow-y:scroll}.container .box .items .item{cursor:pointer;padding:10px 15px;font-size:14px;max-width:100%;border-bottom:1px solid #eee}.container .box .items .item:hover{background:#e6e6e6}.container .box .items .item.active{background:#2978c2;color:#fff}.container .box .items .item.active small{color:#fff}.container .box .items .item.active:hover{background:#22629e}.container .box .items .item small{cursor:pointer;font-size:10px;color:#888;display:block;margin:5px 0 0}.container .box .title{font-size:14px;display:block;border-bottom:1px solid #ebebeb;margin:10px 0;padding-bottom:10px}.container .box.left,.container .box.right{padding:10px}.container .box.center{-webkit-box-flex:1;flex:1 1 10%;padding-top:25px}.container .box .actions{padding-top:20px;padding-left:20px;padding-right:20px}.container .box .actions button{display:block;width:100%;margin-bottom:10px;background:#eee;border-radius:3px;font-size:16px;outline:0}"]
    })
], NgxDualSelectComponent);

let FilterPipe = class FilterPipe {
    transform(items, searchText, fieldName) {
        // return empty array if array is falsy
        if (!items) {
            return [];
        }
        // return the original array if search text is empty
        if (!searchText) {
            return items;
        }
        // convert the searchText to lower case
        searchText = searchText.toLowerCase();
        // retrun the filtered array
        return items.filter(item => {
            if (item && item[fieldName]) {
                return item[fieldName].toLowerCase().includes(searchText);
            }
            return false;
        });
    }
};
FilterPipe = __decorate([
    Pipe({
        name: 'filter'
    })
], FilterPipe);

let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: [
            FilterPipe
        ],
        exports: [
            FilterPipe
        ]
    })
], SharedModule);

let NgxDualSelectModule = class NgxDualSelectModule {
};
NgxDualSelectModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            SharedModule,
            FormsModule
        ],
        declarations: [
            NgxDualSelectComponent
        ],
        exports: [
            NgxDualSelectComponent
        ]
    })
], NgxDualSelectModule);

/**
 * Generated bundle index. Do not edit.
 */

export { NgxDualSelectModule, SharedModule as ɵa, FilterPipe as ɵb, NgxDualSelectComponent as ɵc };
//# sourceMappingURL=ngx-dual-select.js.map
