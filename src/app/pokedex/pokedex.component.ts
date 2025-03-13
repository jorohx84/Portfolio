import { Component } from '@angular/core';
import { ProjectsoverlayComponent } from '../shared/projectsoverlay/projectsoverlay.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pokedex',
  imports: [CommonModule, ProjectsoverlayComponent],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent {
  pokedexSkills = [
    {
      imgPath: './img/css.svg',
      name: 'CSS'
    },
    {
      imgPath: './img/html.svg',
      name: 'HTML'
    },
    {
      imgPath: './img/javascript.svg',
      name: 'JavaScript'
    },
    {
      imgPath: './img/rest-api.svg',
      name: 'Rest-Api'
    },
 
  ];
}

