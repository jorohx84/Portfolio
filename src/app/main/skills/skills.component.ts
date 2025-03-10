import { CommonModule } from '@angular/common';
import { Component, OnInit, ElementRef } from '@angular/core';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { LanguageService } from '../../language.service';  
import { VisibilityService } from '../../visibility.service';
@Component({
  selector: 'app-skills',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  isVisible: boolean = false;
  constructor(private languageService: LanguageService, private elementRef:ElementRef, private visibilityService: VisibilityService) {}
  names = [
    { name: 'HTML', img: 'img/html.svg' },
    { name: 'CSS', img: 'img/css.svg' },
    { name: 'JavaScript', img: 'img/javascript.svg' },
    { name: 'TypeScript', img: 'img/typescript.svg' },
    { name: 'Angular', img: 'img/angular.svg' },
    { name: 'Firebase', img: 'img/firebase.svg' },
    { name: 'Git', img: 'img/git.svg' },
    { name: 'Rest-Api', img: 'img/rest-api.svg' },
    { name: 'Scrum', img: 'img/scrum.svg' },
    { name: 'Material Design', img: 'img/material-design.svg' }
  ];
  currentStickerIndex = 0;
  stickerImages = [
    './img/sticker1.png',
    './img/sticker2.png',
    './img/sticker3.png'
  ];
  isAnimating = false;


  changeSticker() {

    this.isAnimating = !this.isAnimating
    let index = 0;
    if (this.isAnimating) {
      index = 0;

    } else {
      index = 2;
    }

    const changeImage = () => {


      this.currentStickerIndex = index;
      if (this.isAnimating) {
        index++;
      } else {
        index--;
      }

      if (index >= this.stickerImages.length || index < 0) {

        return;
      }


      if (index < this.stickerImages.length) {
        setTimeout(changeImage, 50);
      }
    };


    changeImage();
  }


  get currentStickerImage() {
    return this.stickerImages[this.currentStickerIndex];
  }

  ngOnInit(): void {
    this.visibilityService.addScrollListener(this.elementRef, (isVisible) => {
      this.isVisible = isVisible;
    });
  }

}

