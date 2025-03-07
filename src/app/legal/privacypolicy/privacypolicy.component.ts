import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { LanguageService } from '../../language.service';  
import { HeaderComponent } from '../../shared/header/header.component';
@Component({
  selector: 'app-privacypolicy',
  imports: [CommonModule, TranslatePipe, HeaderComponent],
  templateUrl: './privacypolicy.component.html',
  styleUrl: './privacypolicy.component.scss'
})
export class PrivacypolicyComponent {
  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
