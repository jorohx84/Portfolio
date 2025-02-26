import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectsoverlayComponent } from '../shared/projectsoverlay/projectsoverlay.component';

@Component({
  selector: 'app-dabubble',
  imports: [CommonModule, ProjectsoverlayComponent],
  templateUrl: './dabubble.component.html',
  styleUrl: './dabubble.component.scss'
})
export class DabubbleComponent {

}
