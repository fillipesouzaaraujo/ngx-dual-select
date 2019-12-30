import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDualSelectComponent } from './components/dual-select/ngx-dual-select.component';

@NgModule({
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
export class NgxDualSelectModule { }
