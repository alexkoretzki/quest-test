import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Flight } from '../worker-flights-list/model/flight.interface';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.css'],
})
export class FlightInfoComponent implements OnInit {
  @Input() flight: Flight;

  constructor() {}
  columnDefs = [
    { headerName: 'Plane Number', field: 'plane' },
    { headerName: 'Duration', field: 'duration' },
    { headerName: 'Origin Date', field: 'from_date' },
    { headerName: 'Destination', field: 'to' },
    { headerName: 'Destination Gate', field: 'to_gate' },
  ];
  ngOnInit(): void {}
}
