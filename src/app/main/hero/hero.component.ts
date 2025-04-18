import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ButtonsComponent } from '../../shared/buttons/buttons.component';
import { SocialmediaComponent } from '../../shared/socialmedia/socialmedia.component';
import { TranslatePipe, TranslateDirective } from "@ngx-translate/core";
import { LanguageService } from '../../language.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, RouterModule, HeaderComponent, ButtonsComponent, SocialmediaComponent, TranslatePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  hover: boolean = false;

  frontend = ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd'];
  originalFrontend = [...this.frontend];
  hasChangedFrontend = Array(this.frontend.length).fill(false);

  developer = ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R'];
  originalDeveloper = [...this.developer];
  hasChangedDeveloper = Array(this.developer.length).fill(false);



  toggleCase(array: string[], hasChanged: boolean[], index: number) {

    if (hasChanged[index] === false) {
      const letter = array[index];
      array[index] = letter === letter.toUpperCase()
        ? letter.toLowerCase()
        : letter.toUpperCase();
      hasChanged[index] = true;
    }

  }

  resetCase(array: string[], hasChanged: boolean[], originalArray: string[]) {
    array.forEach((_, index) => {

      array[index] = originalArray[index];

      hasChanged[index] = false;
    });
  }

  changeHover() {
    this.hover = !this.hover;
  }
  ishover() {
    return this.hover === true;

  }


}
