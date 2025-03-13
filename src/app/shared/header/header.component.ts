import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SocialmediaComponent } from '../socialmedia/socialmedia.component';
import { TranslatePipe, TranslateDirective } from "@ngx-translate/core";
import { LanguageService } from '../../language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SocialmediaComponent, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() color: string = '';
  @Input() logo: string = '';
  @Input() background: string = '';
  @Input() respColor: string = '';
  dotClass: string = 'to-the-left';
  activeLanguage: string = '';
  burger: boolean = false;
  currentLanguage: string = '';


  private readonly LANGUAGE_STORAGE_KEY = 'activeLanguage';
  private readonly DOTCLASS_STORAGE_KEY = 'dotClass';

  constructor(private languageService: LanguageService, private router: Router) { }

  ngOnInit(): void {
    const savedLanguage = localStorage.getItem(this.LANGUAGE_STORAGE_KEY) || 'en';
    const savedDotClass = localStorage.getItem(this.DOTCLASS_STORAGE_KEY) || 'to-the-left';
    this.activeLanguage = savedLanguage;
    this.dotClass = savedDotClass;
  }


  changeLanguage(lang: string) {
    this.languageService.changeLanguage(lang);
    this.currentLanguage = this.languageService.getCurrentLanguage();
    if (lang === 'en') {
      this.dotClass = 'to-the-left';
      this.activeLanguage = 'en';


    } else {
      this.dotClass = 'to-the-right'
      this.activeLanguage = 'de';
    }
    localStorage.setItem(this.LANGUAGE_STORAGE_KEY, this.activeLanguage);
    localStorage.setItem(this.DOTCLASS_STORAGE_KEY, this.dotClass);
  }


  isActive(language: string): boolean {
    return this.activeLanguage === language;
  }

  toggleRespMenu(event: Event): void {

    this.burger = !this.burger
    console.log(this.burger);
    event.stopPropagation();
  }

  closeRespMenu() {
    this.burger = false;
  }

  showRespMenu() {
    return this.burger === true;
  }


  reload() {
    this.router.navigate(['main']).then(() => {
      window.location.reload();
    });
  }
}
