import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var NgxDualSelectComponent = /** @class */ (function () {
    function NgxDualSelectComponent() {
        this.selectedItems = new EventEmitter();
        this.listItems = [];
        this.listItemsSelected = [];
        this.searchTextA = '';
        this.searchTextB = '';
    }
    NgxDualSelectComponent.prototype.ngOnInit = function () {
        this.mockLoadItems();
    };
    NgxDualSelectComponent.prototype.ngOnChanges = function ($event) {
        var _this = this;
        if ($event.listA.currentValue) {
            this.listA.forEach(function (item) {
                _this.listItems.push({ title: item[_this.titleItem], subtitle: (_this.subTitleItem) ? item[_this.subTitleItem] : null, active: false, compare: item });
            });
        }
    };
    NgxDualSelectComponent.prototype.mockLoadItems = function () {
    };
    NgxDualSelectComponent.prototype.emitSelectedItems = function () {
        var _this = this;
        var listB = [];
        this.listItemsSelected.forEach(function (item) {
            _this.listA.forEach(function (itemA) {
                if (item.compare === itemA) {
                    listB.push(itemA);
                }
            });
        });
        this.selectedItems.emit(listB);
    };
    NgxDualSelectComponent.prototype.selectItem = function (item) {
        item.active = !item.active;
    };
    NgxDualSelectComponent.prototype.moveSelected = function (direction, all) {
        switch (direction) {
            case 'right':
                this.moveSelectedRight(all);
                break;
            case 'left':
                this.moveSelectedLeft(all);
                break;
        }
    };
    NgxDualSelectComponent.prototype.orderBy = function (list, field) {
        if (field) {
            return list.sort(function (n1, n2) {
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
    };
    NgxDualSelectComponent.prototype.moveSelectedRight = function (all) {
        var _this = this;
        this.listItems.forEach(function (item, key) {
            if (!all) {
                if (item.active) {
                    if (_this.listItemsSelected.indexOf(item) <= -1) {
                        item.active = false;
                        _this.listItemsSelected.push(item);
                    }
                }
            }
            else {
                item.active = false;
                _this.listItemsSelected.push(item);
            }
        });
        this.listItems = this.listItems.filter(function (item) {
            if (_this.listItemsSelected.indexOf(item) === -1) {
                return item;
            }
        });
        this.emitSelectedItems();
    };
    NgxDualSelectComponent.prototype.moveSelectedLeft = function (all) {
        var _this = this;
        this.listItemsSelected.forEach(function (item, key) {
            if (!all) {
                if (item.active) {
                    if (_this.listItems.indexOf(item) <= -1) {
                        item.active = false;
                        _this.listItems.push(item);
                    }
                }
            }
            else {
                item.active = false;
                _this.listItems.push(item);
            }
        });
        this.listItemsSelected = this.listItemsSelected.filter(function (item) {
            if (_this.listItems.indexOf(item) === -1) {
                return item;
            }
        });
        this.emitSelectedItems();
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
    return NgxDualSelectComponent;
}());
export { NgxDualSelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWR1YWwtc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kdWFsLXNlbGVjdC8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbmd4LWR1YWwtc2VsZWN0L2NvbXBvbmVudHMvZHVhbC1zZWxlY3Qvbmd4LWR1YWwtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFlekc7SUFjRTtRQU5VLGtCQUFhLEdBQTZCLElBQUksWUFBWSxFQUFjLENBQUM7UUFDbkYsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixzQkFBaUIsR0FBVyxFQUFFLENBQUM7UUFDL0IsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7SUFFRCxDQUFDO0lBRWpCLHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELDRDQUFXLEdBQVgsVUFBWSxNQUFxQjtRQUFqQyxpQkFRQztRQVBDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2dCQUNyQixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDakIsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FDOUgsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFD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Q1csc0JBQXNCLENBMkhsQztJQUFELDZCQUFDO0NBQUEsQUEzSEQsSUEySEM7U0EzSFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJdGVtIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHN1YnRpdGxlPzogc3RyaW5nO1xyXG4gIGFjdGl2ZTogYm9vbGVhbixcclxuICBjb21wYXJlOiBhbnlcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbmd4LWR1YWwtc2VsZWN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LWR1YWwtc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9uZ3gtZHVhbC1zZWxlY3QuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RHVhbFNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgbGVmdFRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcmlnaHRUaXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxpc3RBOiBBcnJheTxhbnk+O1xyXG4gIEBJbnB1dCgpIHRpdGxlSXRlbTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHN1YlRpdGxlSXRlbT86IHN0cmluZztcclxuICBASW5wdXQoKSBidXR0b25DbGFzcz86IHN0cmluZztcclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRJdGVtczogRXZlbnRFbWl0dGVyPEFycmF5PGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxhbnk+PigpO1xyXG4gIGxpc3RJdGVtczogSXRlbVtdID0gW107XHJcbiAgbGlzdEl0ZW1zU2VsZWN0ZWQ6IEl0ZW1bXSA9IFtdO1xyXG4gIHNlYXJjaFRleHRBID0gJyc7XHJcbiAgc2VhcmNoVGV4dEIgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm1vY2tMb2FkSXRlbXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCRldmVudDogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKCRldmVudC5saXN0QS5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy5saXN0QS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIHRoaXMubGlzdEl0ZW1zLnB1c2goXHJcbiAgICAgICAgICB7IHRpdGxlOiBpdGVtW3RoaXMudGl0bGVJdGVtXSwgc3VidGl0bGU6ICh0aGlzLnN1YlRpdGxlSXRlbSkgPyBpdGVtW3RoaXMuc3ViVGl0bGVJdGVtXSA6IG51bGwsIGFjdGl2ZTogZmFsc2UsIGNvbXBhcmU6IGl0ZW0gfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtb2NrTG9hZEl0ZW1zKCkge1xyXG5cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGVtaXRTZWxlY3RlZEl0ZW1zKCkge1xyXG4gICAgY29uc3QgbGlzdEI6IEFycmF5PGFueT4gPSBbXTtcclxuICAgIHRoaXMubGlzdEl0ZW1zU2VsZWN0ZWQuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgdGhpcy5saXN0QS5mb3JFYWNoKGl0ZW1BID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5jb21wYXJlID09PSBpdGVtQSkge1xyXG4gICAgICAgICAgbGlzdEIucHVzaChpdGVtQSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zLmVtaXQobGlzdEIpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0SXRlbShpdGVtOiBJdGVtKSB7XHJcbiAgICBpdGVtLmFjdGl2ZSA9ICFpdGVtLmFjdGl2ZTtcclxuICB9XHJcblxyXG4gIG1vdmVTZWxlY3RlZChkaXJlY3Rpb246IHN0cmluZywgYWxsOiBib29sZWFuKSB7XHJcbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgdGhpcy5tb3ZlU2VsZWN0ZWRSaWdodChhbGwpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICB0aGlzLm1vdmVTZWxlY3RlZExlZnQoYWxsKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBvcmRlckJ5KGxpc3Q6IEFycmF5PGFueT4sIGZpZWxkPzogc3RyaW5nKTogQXJyYXk8YW55PiB7XHJcbiAgICBpZiAoZmllbGQpIHtcclxuICAgICAgcmV0dXJuIGxpc3Quc29ydCgobjEsIG4yKSA9PiB7XHJcbiAgICAgICAgaWYgKG4xW2ZpZWxkXSA+IG4yW2ZpZWxkXSkge1xyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuMVtmaWVsZF0gPCBuMltmaWVsZF0pIHtcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBtb3ZlU2VsZWN0ZWRSaWdodChhbGw6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMubGlzdEl0ZW1zLmZvckVhY2goKGl0ZW0sIGtleSkgPT4ge1xyXG4gICAgICBpZiAoIWFsbCkge1xyXG4gICAgICAgIGlmIChpdGVtLmFjdGl2ZSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMubGlzdEl0ZW1zU2VsZWN0ZWQuaW5kZXhPZihpdGVtKSA8PSAtMSkge1xyXG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RJdGVtc1NlbGVjdGVkLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5saXN0SXRlbXNTZWxlY3RlZC5wdXNoKGl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMubGlzdEl0ZW1zID0gdGhpcy5saXN0SXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICBpZiAodGhpcy5saXN0SXRlbXNTZWxlY3RlZC5pbmRleE9mKGl0ZW0pID09PSAtMSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZW1pdFNlbGVjdGVkSXRlbXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbW92ZVNlbGVjdGVkTGVmdChhbGw6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMubGlzdEl0ZW1zU2VsZWN0ZWQuZm9yRWFjaCgoaXRlbSwga2V5KSA9PiB7XHJcbiAgICAgIGlmICghYWxsKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0uYWN0aXZlKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5saXN0SXRlbXMuaW5kZXhPZihpdGVtKSA8PSAtMSkge1xyXG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RJdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGlzdEl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5saXN0SXRlbXNTZWxlY3RlZCA9IHRoaXMubGlzdEl0ZW1zU2VsZWN0ZWQuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICBpZiAodGhpcy5saXN0SXRlbXMuaW5kZXhPZihpdGVtKSA9PT0gLTEpIHtcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmVtaXRTZWxlY3RlZEl0ZW1zKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==