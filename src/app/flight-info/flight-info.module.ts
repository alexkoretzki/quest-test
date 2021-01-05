import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightInfoComponent } from './flight-info.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [FlightInfoComponent],
  imports: [CommonModule, AgGridModule.withComponents([])],
  exports: [FlightInfoComponent],
})
export class FlightInfoModule {}
