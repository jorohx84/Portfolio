import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  hover = false;
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
    '/img/sticker1.svg',
    '/img/sticker2.svg',
    '/img/sticker3.svg'
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


  changeHover() {
    this.hover = !this.hover
  }

  isHover() {
    return this.hover === true;
  }
}

