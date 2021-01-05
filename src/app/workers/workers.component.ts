import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkersService } from '../core/services/workers/workers.service';
import { IWorker } from './model/worker.interface';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css'],
})
export class WorkersComponent implements OnInit {
  gridApi: any;
  columnDefs = [{ field: 'name', cellRenderer: 'fullWidthCellRenderer' }];
  workers$: Observable<IWorker[]>;
  isFulWidth: any;
  frameworkComponents: any;

  @Output() workerSelected: EventEmitter<IWorker> = new EventEmitter<IWorker>();
  constructor(private workersService: WorkersService) {}

  ngOnInit(): void {
    this.workers$ = this.workersService.getWorkers();
  }
  onGridReady(grid: any) {
    this.gridApi = grid;
  }
  onFirstDataRendered(params: any): void {
    this.gridApi.api.getDisplayedRowAtIndex(0).setSelected(true);
  }
  rowSelected(row: any): void {
    let selected = this.gridApi.api.getSelectedNodes();
    this.workerSelected.emit(selected[0].data);
  }
}
