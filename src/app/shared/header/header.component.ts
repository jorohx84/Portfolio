import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SocialmediaComponent } from '../socialmedia/socialmedia.component';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { LanguageService } from '../../language.service';  // Importiere den LanguageService

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [CommonModule, SocialmediaComponent, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() color: string = '';
  @Input() logo: string = '';
  dotClass: string = 'to-the-left';
  activeLanguage: string = 'en';
  burger: boolean = false;
  currentLanguage: string='';
  constructor(private languageService: LanguageService) {}


  toggleLanguage(language: string): void {


    if (language === 'en') {
      this.dotClass = 'to-the-left';
      this.activeLanguage = 'en';


    } else {
      this.dotClass = 'to-the-right'
      this.activeLanguage = 'de';



    }
   
    
  }
  changeLanguage(lang: string) {
    this.languageService.changeLanguage(lang); 
    console.log(lang);// Aufruf der changeLanguage-Methode aus dem Service
    this.currentLanguage = this.languageService.getCurrentLanguage();
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
