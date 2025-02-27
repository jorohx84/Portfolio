import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonsComponent } from '../buttons/buttons.component';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  hover = false;
  toggleHover() {
    this.hover = !this.hover;
  }

  isHover() {
    return this.hover === true;
  }

  openOverlay(route:string) {

      this.router.navigate([route]);

   

  }

}
