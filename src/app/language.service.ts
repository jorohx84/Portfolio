import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    
    constructor(private translate: TranslateService) {
        this.translate.addLangs(['de', 'en']);
        this.translate.setDefaultLang('en');
        this.translate.use('en');  // Setzt die Standard-Sprache
    }

    // Methode zum Wechseln der Sprache
    changeLanguage(lang: string) {
        this.translate.use(lang);
        console.log(this.translate);

    }

    // Methode, um die aktuelle Sprache zu bekommen
    getCurrentLanguage(): string {
        return this.translate.currentLang || 'en';
    }
}