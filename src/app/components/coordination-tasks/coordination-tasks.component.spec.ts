import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinationTasksComponent } from './coordination-tasks.component';

describe('CoordinationTasksComponent', () => {
  let component: CoordinationTasksComponent;
  let fixture: ComponentFixture<CoordinationTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoordinationTasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinationTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
