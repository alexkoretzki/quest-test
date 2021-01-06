import { Flight } from 'src/app/worker-flights-list/model/flight.interface';
import { Component } from '@angular/core';
import { WorkersService } from './core/services/workers/workers.service';
import { interval, Subscription } from 'rxjs';
import { IWorker } from './workers/model/worker.interface';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  workerFlights: Flight[];
  selectedFlight: Flight;
  timeInterval: Subscription;
  previousWorker: IWorker;
  constructor(private workersService: WorkersService) {}
  getWorkerFlights(worker: IWorker): void {
    if (this.timeInterval) this.timeInterval.unsubscribe();
    this.timeInterval = interval(10000)
      .pipe(
        startWith(0),
        switchMap(() => this.workersService.getWorkerFlights(worker.id))
      )
      .subscribe((flights: Flight[]) => {
        this.workerFlights = flights;
      });
  }
  flightSelected(flight: Flight): void {
    this.selectedFlight = flight;
  }
}
