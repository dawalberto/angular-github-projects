import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorieDetailsComponent } from './repositorie-details.component';

describe('RepositorieDetailsComponent', () => {
  let component: RepositorieDetailsComponent;
  let fixture: ComponentFixture<RepositorieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositorieDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositorieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
