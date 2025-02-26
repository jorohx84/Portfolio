import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectsoverlayComponent } from '../shared/projectsoverlay/projectsoverlay.component';

@Component({
  selector: 'app-polloloco',
  imports: [CommonModule, ProjectsoverlayComponent],
  templateUrl: './polloloco.component.html',
  styleUrl: './polloloco.component.scss'
})
export class PollolocoComponent {

}
