(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-dual-select', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (global = global || self, factory(global['ngx-dual-select'] = {}, global.ng.core, global.ng.forms, global.ng.common));
}(this, (function (exports, core, forms, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var NgxDualSelectComponent = /** @class */ (function () {
        function NgxDualSelectComponent() {
            this.selectedItems = new core.EventEmitter();
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
        __decorate([
            core.Input()
        ], NgxDualSelectComponent.prototype, "leftTitle", void 0);
        __decorate([
            core.Input()
        ], NgxDualSelectComponent.prototype, "rightTitle", void 0);
        __decorate([
            core.Input()
        ], NgxDualSelectComponent.prototype, "listA", void 0);
        __decorate([
            core.Input()
        ], NgxDualSelectComponent.prototype, "titleItem", void 0);
        __decorate([
            core.Input()
        ], NgxDualSelectComponent.prototype, "subTitleItem", void 0);
        __decorate([
            core.Input()
        ], NgxDualSelectComponent.prototype, "buttonClass", void 0);
        __decorate([
            core.Output()
        ], NgxDualSelectComponent.prototype, "selectedItems", void 0);
        NgxDualSelectComponent = __decorate([
            core.Component({
                selector: 'app-ngx-dual-select',
                template: "<div class=\"container\">\n  <div class=\"box left\">\n    <div class=\"title\">{{leftTitle}}</div>\n    <div class=\"search\">\n      <input type=\"text\" [(ngModel)]=\"searchTextA\" placeholder=\"Pesquisar\" />\n    </div>\n    <div class=\"items customScrollBar\">\n      <div (click)=\"selectItem(item)\" class=\"item\" *ngFor=\"let item of orderBy(listItems, 'title') | filter : searchTextA : 'title'\" [ngClass]=\"{'active': item.active}\">\n        {{item.title}}\n        <small *ngIf=\"item.subtitle\">{{item.subtitle}}</small>\n      </div>\n    </div>\n    <div class=\"items-footer\" *ngIf=\"(listItems | filter : searchTextA : 'title').length > 0\">\n      <small>Total de {{listItems.length}} Itens</small>\n    </div>\n    <div class=\"items-footer\" *ngIf=\"(listItems | filter : searchTextA : 'title').length === 0 && searchTextA\">\n      <small>Nenhum resultado encontrado!</small>\n    </div>\n  </div>\n  <div class=\"box center\">\n    <div class=\"actions\">\n      <button [class]=\"buttonClass\" type=\"button\" (click)=\"moveSelected('right', true)\">&gt;&gt;</button>\n      <button [class]=\"buttonClass\" type=\"button\" (click)=\"moveSelected('right', false)\">&gt;</button>\n      <div class=\"divider\"></div>\n      <button [class]=\"buttonClass\" type=\"button\" (click)=\"moveSelected('left', false)\">&lt;</button>\n      <button [class]=\"buttonClass\" type=\"button\" (click)=\"moveSelected('left', true)\">&lt;&lt;</button>\n    </div>\n  </div>\n  <div class=\"box right\">\n    <div class=\"title\">{{rightTitle}}</div>\n    <div class=\"search\">\n      <input type=\"text\" [(ngModel)]=\"searchTextB\" placeholder=\"Pesquisar\" />\n    </div>\n    <div class=\"items customScrollBar\" *ngIf=\"listItemsSelected.length > 0\">\n      <div (click)=\"selectItem(item)\" class=\"item\" *ngFor=\"let item of  orderBy(listItemsSelected, 'title') | filter : searchTextB : 'title'\" [ngClass]=\"{'active': item.active}\">\n        {{item.title}}\n        <small *ngIf=\"item.subtitle\">{{item.subtitle}}</small>\n      </div>\n    </div>\n    <div class=\"items-footer\" *ngIf=\"(listItemsSelected | filter : searchTextB : 'title').length > 0\">\n      <small>Total de {{listItemsSelected.length}} Itens</small>\n    </div>\n    <div class=\"items-footer\" *ngIf=\"(listItemsSelected | filter : searchTextB : 'title').length === 0 && searchTextB\">\n      <small>Nenhum resultado encontrado!</small>\n    </div>\n  </div>\n</div>",
                styles: [".customScrollBar::-webkit-scrollbar{width:4px}.customScrollBar::-webkit-scrollbar-track{background:#f1f1f1}.customScrollBar::-webkit-scrollbar-thumb{background:#888}.customScrollBar::-webkit-scrollbar-thumb:hover{background:#555}.container{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:top;align-items:top;-webkit-box-pack:center;justify-content:center;background:#f8f8f8}.container .divider{display:block;border-top:1px solid #e9e9e9;margin:20px 0}.container .box{-webkit-box-flex:1;flex-grow:1;flex:1 1 30%;height:auto}.container .box .search{display:-webkit-box;display:flex}.container .box .search input{display:block;width:100%;margin-bottom:10px;padding:5px 10px;font-size:14px;outline:0}.container .box .items-footer{text-align:center;font-size:12px;color:#888;display:block;margin:5px 0 0}.container .box .items{background:#fff;border:1px solid #eee;max-height:300px;overflow-y:scroll}.container .box .items .item{cursor:pointer;padding:10px 15px;font-size:14px;max-width:100%;border-bottom:1px solid #eee}.container .box .items .item:hover{background:#e6e6e6}.container .box .items .item.active{background:#2978c2;color:#fff}.container .box .items .item.active small{color:#fff}.container .box .items .item.active:hover{background:#22629e}.container .box .items .item small{cursor:pointer;font-size:10px;color:#888;display:block;margin:5px 0 0}.container .box .title{font-size:14px;display:block;border-bottom:1px solid #ebebeb;margin:10px 0;padding-bottom:10px}.container .box.left,.container .box.right{padding:10px}.container .box.center{-webkit-box-flex:1;flex:1 1 10%;padding-top:25px}.container .box .actions{padding-top:20px;padding-left:20px;padding-right:20px}.container .box .actions button{display:block;width:100%;margin-bottom:10px;background:#eee;border-radius:3px;font-size:16px;outline:0}"]
            })
        ], NgxDualSelectComponent);
        return NgxDualSelectComponent;
    }());

    var FilterPipe = /** @class */ (function () {
        function FilterPipe() {
        }
        FilterPipe.prototype.transform = function (items, searchText, fieldName) {
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
            return items.filter(function (item) {
                if (item && item[fieldName]) {
                    return item[fieldName].toLowerCase().includes(searchText);
                }
                return false;
            });
        };
        FilterPipe = __decorate([
            core.Pipe({
                name: 'filter'
            })
        ], FilterPipe);
        return FilterPipe;
    }());

    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        SharedModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule
                ],
                declarations: [
                    FilterPipe
                ],
                exports: [
                    FilterPipe
                ]
            })
        ], SharedModule);
        return SharedModule;
    }());

    var NgxDualSelectModule = /** @class */ (function () {
        function NgxDualSelectModule() {
        }
        NgxDualSelectModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule,
                    SharedModule,
                    forms.FormsModule
                ],
                declarations: [
                    NgxDualSelectComponent
                ],
                exports: [
                    NgxDualSelectComponent
                ]
            })
        ], NgxDualSelectModule);
        return NgxDualSelectModule;
    }());

    exports.NgxDualSelectModule = NgxDualSelectModule;
    exports.ɵa = SharedModule;
    exports.ɵb = FilterPipe;
    exports.ɵc = NgxDualSelectComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-dual-select.umd.js.map
