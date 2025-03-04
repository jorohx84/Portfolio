import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { LanguageService } from '../../language.service';  

@Component({
  selector: 'app-buttons',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  @Input() text: string = '';
  @Input() color: string = '';
  @Input() resp: string = '';
  @Input() hoverClass: string = '';
  @Input() disabled: boolean = false;

  constructor(private languageService: LanguageService) {}

  secondhover: boolean = false;
  changeActive() {
    this.secondhover = !this.secondhover;
  }

  isActive() {
    return this.secondhover === true;
  }
}
