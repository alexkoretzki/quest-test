import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkersComponent } from './workers.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [WorkersComponent],
  imports: [CommonModule, AgGridModule.withComponents([])],
  exports: [WorkersComponent],
})
export class WorkersModule {}
