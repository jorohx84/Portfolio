import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { LanguageService } from '../../language.service';  
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-imprint',
  imports: [CommonModule, TranslatePipe, HeaderComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  constructor(private languageService: LanguageService) {}
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
