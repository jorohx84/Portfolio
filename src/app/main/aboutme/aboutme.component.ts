import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonsComponent } from '../../shared/buttons/buttons.component';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { LanguageService } from '../../language.service';  

@Component({
  selector: 'app-aboutme',
  imports: [CommonModule, ButtonsComponent, TranslatePipe],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {
  hover = false;

  constructor(private languageService: LanguageService) {}

  toogleHover() {
    this.hover = !this.hover;
    console.log(this.hover);
    
  }
  isHover() {
    return this.hover === true;
  }
}
