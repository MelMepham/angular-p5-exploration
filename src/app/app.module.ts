import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrialComponent } from './trial/trial.component';
import { ForestMandalaComponent } from './forest-mandala/forest-mandala.component';

@NgModule({
  declarations: [
    AppComponent,
    TrialComponent,
    ForestMandalaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
