import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectoverlayComponent } from './projectoverlay.component';

describe('ProjectoverlayComponent', () => {
  let component: ProjectoverlayComponent;
  let fixture: ComponentFixture<ProjectoverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectoverlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectoverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
