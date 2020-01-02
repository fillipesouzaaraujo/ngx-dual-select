import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxDualSelectComponent } from './components/dual-select/ngx-dual-select.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    NgxDualSelectComponent
  ],
  exports: [
    NgxDualSelectComponent
  ]
})
export class NgxDualSelectModule { }
