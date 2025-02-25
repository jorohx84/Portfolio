import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonsComponent } from '../buttons/buttons.component';

@Component({
  selector: 'app-singleproject',
  imports: [CommonModule, ButtonsComponent],
  templateUrl: './singleproject.component.html',
  styleUrl: './singleproject.component.scss'
})
export class SingleprojectComponent {
  @Input() imagePath: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() className: string = '';

  hover = false;

  toggleHover() {
    this.hover = !this.hover;
    

  }

  isHover() {
    return this.hover === true;
  }
}
