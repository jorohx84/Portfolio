import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    private readonly STORAGE_KEY = 'app_language';
    constructor(private translate: TranslateService) {
        this.translate.addLangs(['de', 'en']);
        const savedLanguage = localStorage.getItem(this.STORAGE_KEY) || 'en';
        this.translate.setDefaultLang(savedLanguage);
        this.translate.use(savedLanguage);
    }

 
    changeLanguage(lang: string) {
        this.translate.use(lang);
        localStorage.setItem(this.STORAGE_KEY, lang);

    }

   
    getCurrentLanguage(): string {
        return this.translate.currentLang || 'en';
    }
}