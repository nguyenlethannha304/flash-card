import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlashsComponent } from './flashs/flashs.component';
import { FlashDetailComponent } from './flashs/flash-detail/flash-detail.component';
import { FlashFormComponent } from './flashs/flash-form/flash-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FlashsComponent,
    FlashDetailComponent,
    FlashFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
