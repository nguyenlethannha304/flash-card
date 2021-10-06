import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlashsComponent } from './flashs/flashs.component';
import { FlashDetailComponent } from './flashs/flash-detail/flash-detail.component';
import { FlashFormComponent } from './flashs/flash-form/flash-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RenderErrorsPipe } from './flashs/flash-form/render-errors.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FlashsComponent,
    FlashDetailComponent,
    FlashFormComponent,
    RenderErrorsPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
