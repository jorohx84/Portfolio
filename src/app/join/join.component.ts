import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectsoverlayComponent } from '../shared/projectsoverlay/projectsoverlay.component';

@Component({
  selector: 'app-join',
  imports: [CommonModule, ProjectsoverlayComponent],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss'
})
export class JoinComponent {

}
