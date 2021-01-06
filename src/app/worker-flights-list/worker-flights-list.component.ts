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
  lastSelectedFlight: Flight;
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
    if (this.lastSelectedFlight) {
      let indexWasFound = false;
      params.api.forEachNode((node: any, index: number) => {
        const flight: Flight = node.data;
        if (flight.num === this.lastSelectedFlight.num) {
          params.api.getDisplayedRowAtIndex(index).setSelected(true);
          indexWasFound = true;
        }
        if (
          index === this.flights.length - 1 &&
          flight.num !== this.lastSelectedFlight.num &&
          !indexWasFound
        ) {
          params.api.getDisplayedRowAtIndex(0).setSelected(true);
        }
      });
    }
  }
  rowSelected(params: any): void {
    const selectedRows = params.api.getSelectedRows();
    this.lastSelectedFlight = selectedRows[0];
    this.flightSelected.emit(selectedRows[0]);
  }
}
