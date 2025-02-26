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
  @Input() param: string = '';

  hover = false;
  isVisable = false;
  toggleHover() {
    this.hover = !this.hover;
  }

  isHover() {
    return this.hover === true;
  }

  openOverlay(param: string) {
    console.log(param);
    this.isVisable = true;
    console.log(this.isVisable);

  }
  closeOverlay() {
    this.isVisable = false;
    console.log(this.isVisable);

  }

}
