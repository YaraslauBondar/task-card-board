import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewTasksComponent } from './review-tasks.component';

describe('ReviewTasksComponent', () => {
  let component: ReviewTasksComponent;
  let fixture: ComponentFixture<ReviewTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewTasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
