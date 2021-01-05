import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Flight } from './model/flight.interface';

@Component({
  selector: 'app-worker-flights-list',
  templateUrl: './worker-flights-list.component.html',
  styleUrls: ['./worker-flights-list.component.css'],
})
export class WorkerFlightsListComponent implements OnInit {
  @Input() flights: Flight[] = [];
  @Output() flightSelected: EventEmitter<Flight> = new EventEmitter<Flight>();

  gridApi: any;
  rendered: boolean;
  columnDefs = [
    { headerName: 'Flight Number', field: 'num' },
    { headerName: 'Origin', field: 'from' },
    { headerName: 'Origin Date', field: 'from_date' },
    { headerName: 'Destination', field: 'to' },
    { headerName: 'Destination Date', field: 'to_date' },
  ];
  constructor() {}

  ngOnInit(): void {}

  onFirstDataRendered(params: any): void {
    params.api.getDisplayedRowAtIndex(0).setSelected(true);
  }
  dataChanged(params: any): void {
    if (params.api.getDisplayedRowAtIndex(0))
      params.api.getDisplayedRowAtIndex(0).setSelected(true);
  }
  rowSelected(row: any): void {
    this.flightSelected.emit(row.data);
  }
}
