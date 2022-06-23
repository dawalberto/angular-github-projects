import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RepositoriePreviewComponent } from './repositorie-preview/repositorie-preview.component';
import { RepositorieDetailsComponent } from './repositorie-details/repositorie-details.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoriePreviewComponent,
    RepositorieDetailsComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
