import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let NgxDualSelectComponent = class NgxDualSelectComponent {
    constructor() { }
    ngOnInit() {
    }
};
NgxDualSelectComponent = tslib_1.__decorate([
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
export { NgxDualSelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWR1YWwtc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kdWFsLXNlbGVjdC8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbmd4LWR1YWwtc2VsZWN0L2NvbXBvbmVudHMvZHVhbC1zZWxlY3Qvbmd4LWR1YWwtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQVdsRCxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQUtqQyxnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztDQUVGLENBQUE7QUFWWSxzQkFBc0I7SUFUbEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQixNQUFNLEVBQUU7WUFDTixXQUFXO1lBQ1gsWUFBWTtTQUNiO1FBQ0QsOGVBQStDOztLQUVoRCxDQUFDO0dBQ1csc0JBQXNCLENBVWxDO1NBVlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW5neC1kdWFsLXNlbGVjdCcsXG4gIGlucHV0czogW1xuICAgIFwibGVmdFRpdGxlXCIsXG4gICAgXCJyaWdodFRpdGxlXCJcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1kdWFsLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25neC1kdWFsLXNlbGVjdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neER1YWxTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGxlZnRUaXRsZTogc3RyaW5nO1xuICByaWdodFRpdGxlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=