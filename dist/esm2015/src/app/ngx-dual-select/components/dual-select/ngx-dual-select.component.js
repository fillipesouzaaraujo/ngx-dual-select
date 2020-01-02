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
        template: "<div class=\"container\">\n  <div class=\"box left\">\n    <div class=\"title\">{{leftTitle}}</div>\n    <div class=\"search\">\n      <input type=\"text\" [(ngModel)]=\"searchTextA\" placeholder=\"Pesquisar\" />\n    </div>\n    <div class=\"items customScrollBar\">\n      <div (click)=\"selectItem(item)\" class=\"item\" *ngFor=\"let item of orderBy(listItems, 'title') | filter : searchTextA : 'title'\" [ngClass]=\"{'active': item.active}\">\n        {{item.title}}\n        <small *ngIf=\"item.subtitle\">{{item.subtitle}}</small>\n      </div>\n    </div>\n    <div class=\"items-footer\" *ngIf=\"(listItems | filter : searchTextA : 'title').length > 0\">\n      <small>Total de {{listItems.length}} Itens</small>\n    </div>\n    <div class=\"items-footer\" *ngIf=\"(listItems | filter : searchTextA : 'title').length === 0 && searchTextA\">\n      <small>Nenhum resultado encontrado!</small>\n    </div>\n  </div>\n  <div class=\"box center\">\n    <div class=\"actions\">\n      <button [class]=\"buttonClass\" type=\"button\" (click)=\"moveSelected('right', true)\">&gt;&gt;</button>\n      <button [class]=\"buttonClass\" type=\"button\" (click)=\"moveSelected('right', false)\">&gt;</button>\n      <div class=\"divider\"></div>\n      <button [class]=\"buttonClass\" type=\"button\" (click)=\"moveSelected('left', false)\">&lt;</button>\n      <button [class]=\"buttonClass\" type=\"button\" (click)=\"moveSelected('left', true)\">&lt;&lt;</button>\n    </div>\n  </div>\n  <div class=\"box right\">\n    <div class=\"title\">{{rightTitle}}</div>\n    <div class=\"search\">\n      <input type=\"text\" [(ngModel)]=\"searchTextB\" placeholder=\"Pesquisar\" />\n    </div>\n    <div class=\"items customScrollBar\" *ngIf=\"listItemsSelected.length > 0\">\n      <div (click)=\"selectItem(item)\" class=\"item\" *ngFor=\"let item of  orderBy(listItemsSelected, 'title') | filter : searchTextB : 'title'\" [ngClass]=\"{'active': item.active}\">\n        {{item.title}}\n        <small *ngIf=\"item.subtitle\">{{item.subtitle}}</small>\n      </div>\n    </div>\n    <div class=\"items-footer\" *ngIf=\"(listItemsSelected | filter : searchTextB : 'title').length > 0\">\n      <small>Total de {{listItemsSelected.length}} Itens</small>\n    </div>\n    <div class=\"items-footer\" *ngIf=\"(listItemsSelected | filter : searchTextB : 'title').length === 0 && searchTextB\">\n      <small>Nenhum resultado encontrado!</small>\n    </div>\n  </div>\n</div>",
        styles: [".customScrollBar::-webkit-scrollbar{width:4px}.customScrollBar::-webkit-scrollbar-track{background:#f1f1f1}.customScrollBar::-webkit-scrollbar-thumb{background:#888}.customScrollBar::-webkit-scrollbar-thumb:hover{background:#555}.container{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:top;align-items:top;-webkit-box-pack:center;justify-content:center;background:#f8f8f8}.container .divider{display:block;border-top:1px solid #e9e9e9;margin:20px 0}.container .box{-webkit-box-flex:1;flex-grow:1;flex:1 1 30%;height:auto}.container .box .search{display:-webkit-box;display:flex}.container .box .search input{display:block;width:100%;margin-bottom:10px;padding:5px 10px;font-size:14px;outline:0}.container .box .items-footer{text-align:center;font-size:12px;color:#888;display:block;margin:5px 0 0}.container .box .items{background:#fff;border:1px solid #eee;max-height:300px;overflow-y:scroll}.container .box .items .item{cursor:pointer;padding:10px 15px;font-size:14px;max-width:100%;border-bottom:1px solid #eee}.container .box .items .item:hover{background:#e6e6e6}.container .box .items .item.active{background:#2978c2;color:#fff}.container .box .items .item.active small{color:#fff}.container .box .items .item.active:hover{background:#22629e}.container .box .items .item small{cursor:pointer;font-size:10px;color:#888;display:block;margin:5px 0 0}.container .box .title{font-size:14px;display:block;border-bottom:1px solid #ebebeb;margin:10px 0;padding-bottom:10px}.container .box.left,.container .box.right{padding:10px}.container .box.center{-webkit-box-flex:1;flex:1 1 10%;padding-top:25px}.container .box .actions{padding-top:20px;padding-left:20px;padding-right:20px}.container .box .actions button{display:block;width:100%;margin-bottom:10px;background:#eee;border-radius:3px;font-size:16px;outline:0}"]
    })
], NgxDualSelectComponent);
export { NgxDualSelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWR1YWwtc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kdWFsLXNlbGVjdC8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbmd4LWR1YWwtc2VsZWN0L2NvbXBvbmVudHMvZHVhbC1zZWxlY3Qvbmd4LWR1YWwtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFlekcsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFjakM7UUFOVSxrQkFBYSxHQUE2QixJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ25GLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsc0JBQWlCLEdBQVcsRUFBRSxDQUFDO1FBQy9CLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO0lBRUQsQ0FBQztJQUVqQixRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxXQUFXLENBQUMsTUFBcUI7UUFDL0IsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRTtZQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ2pCLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQzlILENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztT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c0IsQ0EySGxDO1NBM0hZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSXRlbSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHN1YnRpdGxlPzogc3RyaW5nO1xuICBhY3RpdmU6IGJvb2xlYW4sXG4gIGNvbXBhcmU6IGFueVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbmd4LWR1YWwtc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1kdWFsLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25neC1kdWFsLXNlbGVjdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neER1YWxTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgbGVmdFRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJpZ2h0VGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgbGlzdEE6IEFycmF5PGFueT47XG4gIEBJbnB1dCgpIHRpdGxlSXRlbTogc3RyaW5nO1xuICBASW5wdXQoKSBzdWJUaXRsZUl0ZW0/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJ1dHRvbkNsYXNzPzogc3RyaW5nO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRJdGVtczogRXZlbnRFbWl0dGVyPEFycmF5PGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxhbnk+PigpO1xuICBsaXN0SXRlbXM6IEl0ZW1bXSA9IFtdO1xuICBsaXN0SXRlbXNTZWxlY3RlZDogSXRlbVtdID0gW107XG4gIHNlYXJjaFRleHRBID0gJyc7XG4gIHNlYXJjaFRleHRCID0gJyc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm1vY2tMb2FkSXRlbXMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCRldmVudDogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICgkZXZlbnQubGlzdEEuY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLmxpc3RBLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIHRoaXMubGlzdEl0ZW1zLnB1c2goXG4gICAgICAgICAgeyB0aXRsZTogaXRlbVt0aGlzLnRpdGxlSXRlbV0sIHN1YnRpdGxlOiAodGhpcy5zdWJUaXRsZUl0ZW0pID8gaXRlbVt0aGlzLnN1YlRpdGxlSXRlbV0gOiBudWxsLCBhY3RpdmU6IGZhbHNlLCBjb21wYXJlOiBpdGVtIH1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbW9ja0xvYWRJdGVtcygpIHtcblxuICB9XG5cblxuICBwcml2YXRlIGVtaXRTZWxlY3RlZEl0ZW1zKCkge1xuICAgIGNvbnN0IGxpc3RCOiBBcnJheTxhbnk+ID0gW107XG4gICAgdGhpcy5saXN0SXRlbXNTZWxlY3RlZC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgdGhpcy5saXN0QS5mb3JFYWNoKGl0ZW1BID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uY29tcGFyZSA9PT0gaXRlbUEpIHtcbiAgICAgICAgICBsaXN0Qi5wdXNoKGl0ZW1BKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zLmVtaXQobGlzdEIpO1xuICB9XG5cbiAgc2VsZWN0SXRlbShpdGVtOiBJdGVtKSB7XG4gICAgaXRlbS5hY3RpdmUgPSAhaXRlbS5hY3RpdmU7XG4gIH1cblxuICBtb3ZlU2VsZWN0ZWQoZGlyZWN0aW9uOiBzdHJpbmcsIGFsbDogYm9vbGVhbikge1xuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIHRoaXMubW92ZVNlbGVjdGVkUmlnaHQoYWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgdGhpcy5tb3ZlU2VsZWN0ZWRMZWZ0KGFsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG5cbiAgb3JkZXJCeShsaXN0OiBBcnJheTxhbnk+LCBmaWVsZD86IHN0cmluZyk6IEFycmF5PGFueT4ge1xuICAgIGlmIChmaWVsZCkge1xuICAgICAgcmV0dXJuIGxpc3Quc29ydCgobjEsIG4yKSA9PiB7XG4gICAgICAgIGlmIChuMVtmaWVsZF0gPiBuMltmaWVsZF0pIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobjFbZmllbGRdIDwgbjJbZmllbGRdKSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsaXN0O1xuICAgIH1cbiAgfVxuXG5cbiAgcHJpdmF0ZSBtb3ZlU2VsZWN0ZWRSaWdodChhbGw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmxpc3RJdGVtcy5mb3JFYWNoKChpdGVtLCBrZXkpID0+IHtcbiAgICAgIGlmICghYWxsKSB7XG4gICAgICAgIGlmIChpdGVtLmFjdGl2ZSkge1xuICAgICAgICAgIGlmICh0aGlzLmxpc3RJdGVtc1NlbGVjdGVkLmluZGV4T2YoaXRlbSkgPD0gLTEpIHtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxpc3RJdGVtc1NlbGVjdGVkLnB1c2goaXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxpc3RJdGVtc1NlbGVjdGVkLnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5saXN0SXRlbXMgPSB0aGlzLmxpc3RJdGVtcy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICBpZiAodGhpcy5saXN0SXRlbXNTZWxlY3RlZC5pbmRleE9mKGl0ZW0pID09PSAtMSkge1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmVtaXRTZWxlY3RlZEl0ZW1zKCk7XG4gIH1cblxuICBwcml2YXRlIG1vdmVTZWxlY3RlZExlZnQoYWxsOiBib29sZWFuKSB7XG4gICAgdGhpcy5saXN0SXRlbXNTZWxlY3RlZC5mb3JFYWNoKChpdGVtLCBrZXkpID0+IHtcbiAgICAgIGlmICghYWxsKSB7XG4gICAgICAgIGlmIChpdGVtLmFjdGl2ZSkge1xuICAgICAgICAgIGlmICh0aGlzLmxpc3RJdGVtcy5pbmRleE9mKGl0ZW0pIDw9IC0xKSB7XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5saXN0SXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGlzdEl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5saXN0SXRlbXNTZWxlY3RlZCA9IHRoaXMubGlzdEl0ZW1zU2VsZWN0ZWQuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgaWYgKHRoaXMubGlzdEl0ZW1zLmluZGV4T2YoaXRlbSkgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZW1pdFNlbGVjdGVkSXRlbXMoKTtcbiAgfVxufVxuIl19