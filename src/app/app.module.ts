import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkersModule } from './workers/workers.module';
import { HttpClientModule } from '@angular/common/http';
import { WorkerFlightsListModule } from './worker-flights-list/worker-flights-list.module';
import { FlightInfoModule } from './flight-info/flight-info.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    WorkersModule,
    WorkerFlightsListModule,
    FlightInfoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
