import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslatePipe, TranslateDirective } from "@ngx-translate/core";
import { LanguageService } from '../../language.service';
import { Router } from '@angular/router';

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


  constructor(private languageService: LanguageService, private router: Router) { }

  secondhover: boolean = false;
  changeActive() {
    this.secondhover = !this.secondhover;
  }

  isActive() {
    return this.secondhover === true;
  }


}
