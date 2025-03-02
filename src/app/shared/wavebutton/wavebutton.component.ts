import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wavebutton',
  imports: [CommonModule],
  templateUrl: './wavebutton.component.html',
  styleUrl: './wavebutton.component.scss'
})
export class WavebuttonComponent {
  @Input() text: string = '';
  @Input() imagePath: string = '';

  hover = false;

  toggleHover() {
    this.hover = !this.hover;
  }

  isHover() {
    return this.hover === true;
  }
}

