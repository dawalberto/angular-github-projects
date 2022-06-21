import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RepositoriePreviewComponent } from './repositorie-preview/repositorie-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoriePreviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
