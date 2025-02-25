import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SingleprojectComponent } from '../../shared/singleproject/singleproject.component';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, SingleprojectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  hover = false;

  toggleHover() {
    this.hover = !this.hover;

  }

  isHover() {
    return this.hover === true;
  }
}
