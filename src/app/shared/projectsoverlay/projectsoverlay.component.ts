import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projectsoverlay',
  imports: [CommonModule],
  templateUrl: './projectsoverlay.component.html',
  styleUrl: './projectsoverlay.component.scss'
})
export class ProjectsoverlayComponent {
  @Input() title: string = '';
}
