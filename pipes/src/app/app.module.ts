import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConvertPipe } from './convert.pipe';
import { ConvertheatPipe } from './convertheat.pipe';
import { ConvertcryptoPipe } from './convertcrypto.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConvertPipe,
    ConvertheatPipe,
    ConvertcryptoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
