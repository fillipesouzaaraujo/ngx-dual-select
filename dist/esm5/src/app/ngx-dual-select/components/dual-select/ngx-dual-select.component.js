import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var NgxDualSelectComponent = /** @class */ (function () {
    function NgxDualSelectComponent() {
    }
    NgxDualSelectComponent.prototype.ngOnInit = function () {
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
    return NgxDualSelectComponent;
}());
export { NgxDualSelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWR1YWwtc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kdWFsLXNlbGVjdC8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbmd4LWR1YWwtc2VsZWN0L2NvbXBvbmVudHMvZHVhbC1zZWxlY3Qvbmd4LWR1YWwtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQVdsRDtJQUtFO0lBQWdCLENBQUM7SUFFakIseUNBQVEsR0FBUjtJQUNBLENBQUM7SUFSVSxzQkFBc0I7UUFUbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixNQUFNLEVBQUU7Z0JBQ04sV0FBVztnQkFDWCxZQUFZO2FBQ2I7WUFDRCw4ZUFBK0M7O1NBRWhELENBQUM7T0FDVyxzQkFBc0IsQ0FVbEM7SUFBRCw2QkFBQztDQUFBLEFBVkQsSUFVQztTQVZZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1uZ3gtZHVhbC1zZWxlY3QnLFxuICBpbnB1dHM6IFtcbiAgICBcImxlZnRUaXRsZVwiLFxuICAgIFwicmlnaHRUaXRsZVwiXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtZHVhbC1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3gtZHVhbC1zZWxlY3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hEdWFsU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBsZWZ0VGl0bGU6IHN0cmluZztcbiAgcmlnaHRUaXRsZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19