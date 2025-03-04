import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ButtonsComponent } from '../buttons/buttons.component';
import { Router } from '@angular/router';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { LanguageService } from '../../language.service';  

@Component({
  selector: 'app-singleproject',
  imports: [CommonModule, ButtonsComponent, TranslatePipe],
  templateUrl: './singleproject.component.html',
  styleUrl: './singleproject.component.scss'
})
export class SingleprojectComponent {
  @Input() imagePath: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() className: string = '';
  @Input() param: string = '';
  @Input() sticker: string = '';
  @Input() stickerClass: string = '';

  constructor(private router: Router, private languageService: LanguageService) {}
 
  hover = false;
  toggleHover() {
    this.hover = !this.hover;
  }

  isHover() {
    return this.hover === true;
  }

  openOverlay(route:string) {

      this.router.navigate([route]);
  }
}


