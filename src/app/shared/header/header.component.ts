import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { SocialmediaComponent } from '../socialmedia/socialmedia.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule, SocialmediaComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  dotClass: string = 'to-the-left';
  activeLanguage: string = 'en';
  burger: boolean = false;

  changeLanguage(language: string): void {
    

    if (language === 'en') {
      this.dotClass = 'to-the-left';
      this.activeLanguage = 'en';
   

    } else {
      this.dotClass = 'to-the-right'
      this.activeLanguage = 'de';

      
    }
  }

  isActive(language: string): boolean {
    return this.activeLanguage === language;
  }

  toggleRespMenu() {

    this.burger = !this.burger
    console.log(this.burger);
    
  }

  showRespMenu() {
    return this.burger === true;
  }

}
