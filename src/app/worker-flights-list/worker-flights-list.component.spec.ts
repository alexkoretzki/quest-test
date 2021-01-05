import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerFlightsListComponent } from './worker-flights-list.component';

describe('WorkerFlightsListComponent', () => {
  let component: WorkerFlightsListComponent;
  let fixture: ComponentFixture<WorkerFlightsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerFlightsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerFlightsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
