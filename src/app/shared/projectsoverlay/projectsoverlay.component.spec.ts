import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsoverlayComponent } from './projectsoverlay.component';

describe('ProjectsoverlayComponent', () => {
  let component: ProjectsoverlayComponent;
  let fixture: ComponentFixture<ProjectsoverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsoverlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsoverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
