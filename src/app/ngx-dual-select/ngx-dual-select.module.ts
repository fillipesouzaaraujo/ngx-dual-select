import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDualSelectComponent } from './ngx-dual-select.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxDualSelectComponent
  ],
  exports: [
    NgxDualSelectComponent,
    NgxDualSelectModule
  ]
})
export class NgxDualSelectModule { }
