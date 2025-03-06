import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { LanguageService } from '../../language.service';  
@Component({
  selector: 'app-privacypolicy',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './privacypolicy.component.html',
  styleUrl: './privacypolicy.component.scss'
})
export class PrivacypolicyComponent {
  constructor(private languageService: LanguageService) {}
}
