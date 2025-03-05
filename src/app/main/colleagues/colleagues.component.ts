import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { LanguageService } from '../../language.service';  

@Component({
  selector: 'app-colleagues',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './colleagues.component.html',
  styleUrl: './colleagues.component.scss'
})
export class ColleaguesComponent {
  arrow = false;
  constructor(private languageService: LanguageService) {}
  thoughts = [
    {
      name: 'Ramona Hombeuel',
      job: 'Business Development',
      linkedin: '',
      comment: 'thoughts.thought1'
    },
    {
      name: 'Nadine Taenzer',
      job: 'Sales Administrative',
      linkedin: '',
      comment: 'thoughts.thought2'
    },
    {
      name: 'Dr. Volker Nagel',
      job: 'Sales Director',
      linkedin: '',
      comment: 'thoughts.thought3'
    },

  ];




  changeArrow() {
    this.arrow = !this.arrow;
  }

  isArrow() {
    return this.arrow === true;
  }

}
