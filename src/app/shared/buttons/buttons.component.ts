import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  imports: [CommonModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  @Input() text: string = '';
  @Input() color: string = '';
  @Input() resp: string = '';
  @Input() hoverClass: string = '';

 

  secondhover: boolean = false;
  changeActive() {
    this.secondhover = !this.secondhover;
  }

  isActive() {
    return this.secondhover === true;
  }
}
