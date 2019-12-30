import { __decorate } from 'tslib';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

let NgxDualSelectComponent = class NgxDualSelectComponent {
    constructor() { }
    ngOnInit() {
    }
};
NgxDualSelectComponent = __decorate([
    Component({
        selector: 'app-ngx-dual-select',
        inputs: [
            "leftTitle",
            "rightTitle"
        ],
        template: "<div class=\"container\">\n  <div class=\"box left\">\n    <h1 class=\"title\">{{leftTitle}}</h1>\n  </div>\n  <div class=\"box center\">\n    <div class=\"actions\">\n      <button type=\"button\">&gt;&gt;</button>\n      <button type=\"button\">&gt;</button>\n      <hr />\n      <button type=\"button\">&lt;</button>\n      <button type=\"button\">&lt;&lt;</button>\n    </div>\n  </div>\n  <div class=\"box right\">\n    <h1 class=\"title\">{{rightTitle}}</h1>\n  </div>\n</div>",
        styles: [".container{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:top;align-items:top;-webkit-box-pack:center;justify-content:center;background:#f8f8f8}.container .box{-webkit-box-flex:1;flex-grow:1;flex:1 1 30%;height:auto}.container .box .title{font-size:14px;font-weight:700;font-family:Arial,Helvetica,sans-serif}.container .box.left,.container .box.right{padding:10px}.container .box.center{-webkit-box-flex:1;flex:1 1 10%;border-right:1px solid #d4d4d4;border-left:1px solid #d4d4d4}.container .box hr{border-top:1px solid #e4e4e4;height:0;margin-top:20px;margin-bottom:20px}.container .box .actions{padding-top:20px;padding-left:20px;padding-right:20px}.container .box .actions button{display:block;width:100%;margin-bottom:10px;background:#eee;border-radius:3px;font-size:16px}"]
    })
], NgxDualSelectComponent);

let NgxDualSelectModule = class NgxDualSelectModule {
};
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

/**
 * Generated bundle index. Do not edit.
 */

export { NgxDualSelectModule, NgxDualSelectComponent as ɵa };
//# sourceMappingURL=ngx-dual-select.js.map
