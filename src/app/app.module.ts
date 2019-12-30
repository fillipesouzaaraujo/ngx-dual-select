import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxDualSelectModule } from './ngx-dual-select/ngx-dual-select.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxDualSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
