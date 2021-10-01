import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlashsComponent } from './flashs/flashs.component';
import { FlashDetailComponent } from './flashs/flash-detail/flash-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FlashsComponent,
    FlashDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
