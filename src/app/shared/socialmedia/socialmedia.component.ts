import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-socialmedia',
  imports: [CommonModule],
  templateUrl: './socialmedia.component.html',
  styleUrl: './socialmedia.component.scss'
})
export class SocialmediaComponent {
  @Input() className: string = '';
  highlight = false;
  toggleHighlight() {
    this.highlight = !this.highlight;
    console.log(this.highlight);

  }

  isHighlighted() {
    return this.highlight === true;
  }
}
