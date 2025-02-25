import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonsComponent } from '../../shared/buttons/buttons.component';

@Component({
  selector: 'app-aboutme',
  imports: [CommonModule, ButtonsComponent],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {
  hover = false;

  toogleHover() {
    this.hover = !this.hover;
    console.log(this.hover);
    
  }
  isHover() {
    return this.hover === true;
  }
}
