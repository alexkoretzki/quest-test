import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/worker-flights-list/model/flight.interface';
import { IWorker } from 'src/app/workers/model/worker.interface';
@Injectable({
  providedIn: 'root',
})
export class WorkersService {
  constructor(private http: HttpClient) {}

  getWorkers(): Observable<IWorker[]> {
    return this.http.get<IWorker[]>(
      'https://interview-mock.herokuapp.com/api/workers'
    );
  }
  getWorkerFlights(workerId: string): Observable<Flight[]> {
    return this.http.get<Flight[]>(
      `https://interview-mock.herokuapp.com/api/workers/${workerId}`
    );
  }
}
