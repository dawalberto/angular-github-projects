import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoriePreviewComponent } from './repositorie-preview.component';

describe('RepositoriePreviewComponent', () => {
  let component: RepositoriePreviewComponent;
  let fixture: ComponentFixture<RepositoriePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoriePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoriePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
