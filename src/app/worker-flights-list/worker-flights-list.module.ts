import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerFlightsListComponent } from './worker-flights-list.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [WorkerFlightsListComponent],
  imports: [CommonModule, AgGridModule.withComponents([])],
  exports: [WorkerFlightsListComponent],
})
export class WorkerFlightsListModule {}
