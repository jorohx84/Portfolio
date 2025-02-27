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
  daBubbleSkills = [
    {
      imgPath: '/img/css.svg',
      name: 'CSS'
    },
    {
      imgPath: '/img/html.svg',
      name: 'HTML'
    },
    {
      imgPath: '/img/firebase.svg',
      name: 'Firebase'
    },
    {
      imgPath: '/img/angular.svg',
      name: 'Angular'
    },
    {
      imgPath: '/img/typescript.svg',
      name: 'TypeScript'
    },
  ];
}
