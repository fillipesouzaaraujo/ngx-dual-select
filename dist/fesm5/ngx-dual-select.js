import { __decorate } from 'tslib';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var NgxDualSelectComponent = /** @class */ (function () {
    function NgxDualSelectComponent() {
    }
    NgxDualSelectComponent.prototype.ngOnInit = function () {
    };
    NgxDualSelectComponent = __decorate([
        Component({
            selector: 'app-ngx-dual-select',
            template: "<p>\n  ngx-dual-select works!\n</p>\n<p>\n  ngx-dual-select works!\n</p><p>\n  ngx-dual-select works!\n</p><p>\n  ngx-dual-select works!\n</p>",
            styles: [""]
        })
    ], NgxDualSelectComponent);
    return NgxDualSelectComponent;
}());

var NgxDualSelectModule = /** @class */ (function () {
    function NgxDualSelectModule() {
    }
    NgxDualSelectModule = __decorate([
        NgModule({
            imports: [
                CommonModule
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

/**
 * Generated bundle index. Do not edit.
 */

export { NgxDualSelectModule, NgxDualSelectComponent as ɵa };
//# sourceMappingURL=ngx-dual-select.js.map
