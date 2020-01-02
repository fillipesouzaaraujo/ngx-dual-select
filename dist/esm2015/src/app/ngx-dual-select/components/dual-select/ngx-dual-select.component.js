import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
tslib_1.__decorate([
    Input()
], NgxDualSelectComponent.prototype, "leftTitle", void 0);
tslib_1.__decorate([
    Input()
], NgxDualSelectComponent.prototype, "rightTitle", void 0);
tslib_1.__decorate([
    Input()
], NgxDualSelectComponent.prototype, "listA", void 0);
tslib_1.__decorate([
    Input()
], NgxDualSelectComponent.prototype, "titleItem", void 0);
tslib_1.__decorate([
    Input()
], NgxDualSelectComponent.prototype, "subTitleItem", void 0);
tslib_1.__decorate([
    Input()
], NgxDualSelectComponent.prototype, "buttonClass", void 0);
tslib_1.__decorate([
    Output()
], NgxDualSelectComponent.prototype, "selectedItems", void 0);
NgxDualSelectComponent = tslib_1.__decorate([
    Component({
        selector: 'app-ngx-dual-select',
        template: "<div class=\"container\">\r\n  <div class=\"box left\">\r\n    <div class=\"title\">{{leftTitle}}</div>\r\n    <div class=\"search\">\r\n      <input type=\"text\" [(ngModel)]=\"searchTextA\" placeholder=\"Pesquisar\" />\r\n    </div>\r\n    <div class=\"items customScrollBar\">\r\n      <div (click)=\"selectItem(item)\" class=\"item\" *ngFor=\"let item of orderBy(listItems, 'title') | filter : searchTextA : 'title'\" [ngClass]=\"{'active': item.active}\">\r\n        {{item.title}}\r\n        <small *ngIf=\"item.subtitle\">{{item.subtitle}}</small>\r\n      </div>\r\n    </div>\r\n    <div class=\"items-footer\" *ngIf=\"(listItems | filter : searchTextA : 'title').length > 0\">\r\n      <small>Total de {{listItems.length}} Itens</small>\r\n    </div>\r\n    <div class=\"items-footer\" *ngIf=\"(listItems | filter : searchTextA : 'title').length === 0 && searchTextA\">\r\n      <small>Nenhum resultado encontrado!</small>\r\n    </div>\r\n  </div>\r\n  <div class=\"box center\">\r\n    <div class=\"action-items\">\r\n      <button [class]=\"buttonClass\" type=\"button\" (click)=\"moveSelected('right', true)\">&gt;&gt;</button>\r\n      <button [class]=\"buttonClass\" type=\"button\" (click)=\"moveSelected('right', false)\">&gt;</button>\r\n      <div class=\"divider\"></div>\r\n      <button [class]=\"buttonClass\" type=\"button\" (click)=\"moveSelected('left', false)\">&lt;</button>\r\n      <button [class]=\"buttonClass\" type=\"button\" (click)=\"moveSelected('left', true)\">&lt;&lt;</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"box right\">\r\n    <div class=\"title\">{{rightTitle}}</div>\r\n    <div class=\"search\">\r\n      <input type=\"text\" [(ngModel)]=\"searchTextB\" placeholder=\"Pesquisar\" />\r\n    </div>\r\n    <div class=\"items customScrollBar\" *ngIf=\"listItemsSelected.length > 0\">\r\n      <div (click)=\"selectItem(item)\" class=\"item\" *ngFor=\"let item of  orderBy(listItemsSelected, 'title') | filter : searchTextB : 'title'\" [ngClass]=\"{'active': item.active}\">\r\n        {{item.title}}\r\n        <small *ngIf=\"item.subtitle\">{{item.subtitle}}</small>\r\n      </div>\r\n    </div>\r\n    <div class=\"items-footer\" *ngIf=\"(listItemsSelected | filter : searchTextB : 'title').length > 0\">\r\n      <small>Total de {{listItemsSelected.length}} Itens</small>\r\n    </div>\r\n    <div class=\"items-footer\" *ngIf=\"(listItemsSelected | filter : searchTextB : 'title').length === 0 && searchTextB\">\r\n      <small>Nenhum resultado encontrado!</small>\r\n    </div>\r\n  </div>\r\n</div>",
        styles: [".customScrollBar::-webkit-scrollbar{width:4px}.customScrollBar::-webkit-scrollbar-track{background:#f1f1f1}.customScrollBar::-webkit-scrollbar-thumb{background:#888}.customScrollBar::-webkit-scrollbar-thumb:hover{background:#555}.container{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:top;align-items:top;-webkit-box-pack:center;justify-content:center;background:#f8f8f8}.container .divider{display:block;border-top:1px solid #e9e9e9;margin:20px 0}.container .box{-webkit-box-flex:1;flex-grow:1;flex:1 1 30%;height:auto}.container .box .search{display:-webkit-box;display:flex}.container .box .search input{display:block;width:100%;margin-bottom:10px;padding:5px 10px;font-size:14px;outline:0}.container .box .items-footer{text-align:center;font-size:12px;color:#888;display:block;margin:5px 0 0}.container .box .items{background:#fff;border:1px solid #eee;max-height:300px;overflow-y:scroll}.container .box .items .item{cursor:pointer;padding:10px 15px;font-size:14px;max-width:100%;border-bottom:1px solid #eee}.container .box .items .item:hover{background:#e6e6e6}.container .box .items .item.active{background:#2978c2;color:#fff}.container .box .items .item.active small{color:#fff}.container .box .items .item.active:hover{background:#22629e}.container .box .items .item small{cursor:pointer;font-size:10px;color:#888;display:block;margin:5px 0 0}.container .box .title{font-size:14px;display:block;border-bottom:1px solid #ebebeb;margin:10px 0;padding-bottom:10px}.container .box.left,.container .box.right{padding:10px}.container .box.center{-webkit-box-flex:1;flex:1 1 10%;padding-top:25px}.container .box .action-items{padding-top:20px;padding-left:20px;padding-right:20px;position:relative;text-align:center}.container .box .action-items button{display:block;margin-left:auto;margin-right:auto;margin-bottom:10px;outline:0}"]
    })
], NgxDualSelectComponent);
export { NgxDualSelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWR1YWwtc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kdWFsLXNlbGVjdC8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbmd4LWR1YWwtc2VsZWN0L2NvbXBvbmVudHMvZHVhbC1zZWxlY3Qvbmd4LWR1YWwtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFlekcsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFjakM7UUFOVSxrQkFBYSxHQUE2QixJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ25GLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsc0JBQWlCLEdBQVcsRUFBRSxDQUFDO1FBQy9CLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO0lBRUQsQ0FBQztJQUVqQixRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxXQUFXLENBQUMsTUFBcUI7UUFDL0IsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRTtZQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ2pCLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQzlILENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztT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c0IsQ0EySGxDO1NBM0hZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSXRlbSB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBzdWJ0aXRsZT86IHN0cmluZztcclxuICBhY3RpdmU6IGJvb2xlYW4sXHJcbiAgY29tcGFyZTogYW55XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLW5neC1kdWFsLXNlbGVjdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1kdWFsLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LWR1YWwtc2VsZWN0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neER1YWxTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIGxlZnRUaXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJpZ2h0VGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBsaXN0QTogQXJyYXk8YW55PjtcclxuICBASW5wdXQoKSB0aXRsZUl0ZW06IHN0cmluZztcclxuICBASW5wdXQoKSBzdWJUaXRsZUl0ZW0/OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYnV0dG9uQ2xhc3M/OiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkSXRlbXM6IEV2ZW50RW1pdHRlcjxBcnJheTxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXI8QXJyYXk8YW55Pj4oKTtcclxuICBsaXN0SXRlbXM6IEl0ZW1bXSA9IFtdO1xyXG4gIGxpc3RJdGVtc1NlbGVjdGVkOiBJdGVtW10gPSBbXTtcclxuICBzZWFyY2hUZXh0QSA9ICcnO1xyXG4gIHNlYXJjaFRleHRCID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5tb2NrTG9hZEl0ZW1zKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygkZXZlbnQ6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICgkZXZlbnQubGlzdEEuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIHRoaXMubGlzdEEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICB0aGlzLmxpc3RJdGVtcy5wdXNoKFxyXG4gICAgICAgICAgeyB0aXRsZTogaXRlbVt0aGlzLnRpdGxlSXRlbV0sIHN1YnRpdGxlOiAodGhpcy5zdWJUaXRsZUl0ZW0pID8gaXRlbVt0aGlzLnN1YlRpdGxlSXRlbV0gOiBudWxsLCBhY3RpdmU6IGZhbHNlLCBjb21wYXJlOiBpdGVtIH1cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbW9ja0xvYWRJdGVtcygpIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBlbWl0U2VsZWN0ZWRJdGVtcygpIHtcclxuICAgIGNvbnN0IGxpc3RCOiBBcnJheTxhbnk+ID0gW107XHJcbiAgICB0aGlzLmxpc3RJdGVtc1NlbGVjdGVkLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIHRoaXMubGlzdEEuZm9yRWFjaChpdGVtQSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0uY29tcGFyZSA9PT0gaXRlbUEpIHtcclxuICAgICAgICAgIGxpc3RCLnB1c2goaXRlbUEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5lbWl0KGxpc3RCKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdEl0ZW0oaXRlbTogSXRlbSkge1xyXG4gICAgaXRlbS5hY3RpdmUgPSAhaXRlbS5hY3RpdmU7XHJcbiAgfVxyXG5cclxuICBtb3ZlU2VsZWN0ZWQoZGlyZWN0aW9uOiBzdHJpbmcsIGFsbDogYm9vbGVhbikge1xyXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgIHRoaXMubW92ZVNlbGVjdGVkUmlnaHQoYWxsKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgdGhpcy5tb3ZlU2VsZWN0ZWRMZWZ0KGFsbCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgb3JkZXJCeShsaXN0OiBBcnJheTxhbnk+LCBmaWVsZD86IHN0cmluZyk6IEFycmF5PGFueT4ge1xyXG4gICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgIHJldHVybiBsaXN0LnNvcnQoKG4xLCBuMikgPT4ge1xyXG4gICAgICAgIGlmIChuMVtmaWVsZF0gPiBuMltmaWVsZF0pIHtcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobjFbZmllbGRdIDwgbjJbZmllbGRdKSB7XHJcbiAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgbW92ZVNlbGVjdGVkUmlnaHQoYWxsOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmxpc3RJdGVtcy5mb3JFYWNoKChpdGVtLCBrZXkpID0+IHtcclxuICAgICAgaWYgKCFhbGwpIHtcclxuICAgICAgICBpZiAoaXRlbS5hY3RpdmUpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmxpc3RJdGVtc1NlbGVjdGVkLmluZGV4T2YoaXRlbSkgPD0gLTEpIHtcclxuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5saXN0SXRlbXNTZWxlY3RlZC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGlzdEl0ZW1zU2VsZWN0ZWQucHVzaChpdGVtKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmxpc3RJdGVtcyA9IHRoaXMubGlzdEl0ZW1zLmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgaWYgKHRoaXMubGlzdEl0ZW1zU2VsZWN0ZWQuaW5kZXhPZihpdGVtKSA9PT0gLTEpIHtcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmVtaXRTZWxlY3RlZEl0ZW1zKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1vdmVTZWxlY3RlZExlZnQoYWxsOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmxpc3RJdGVtc1NlbGVjdGVkLmZvckVhY2goKGl0ZW0sIGtleSkgPT4ge1xyXG4gICAgICBpZiAoIWFsbCkge1xyXG4gICAgICAgIGlmIChpdGVtLmFjdGl2ZSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMubGlzdEl0ZW1zLmluZGV4T2YoaXRlbSkgPD0gLTEpIHtcclxuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5saXN0SXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxpc3RJdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMubGlzdEl0ZW1zU2VsZWN0ZWQgPSB0aGlzLmxpc3RJdGVtc1NlbGVjdGVkLmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgaWYgKHRoaXMubGlzdEl0ZW1zLmluZGV4T2YoaXRlbSkgPT09IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5lbWl0U2VsZWN0ZWRJdGVtcygpO1xyXG4gIH1cclxufVxyXG4iXX0=