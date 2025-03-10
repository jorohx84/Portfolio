import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import { LanguageService } from '../../language.service';  
import { VisibilityService } from '../../visibility.service';

@Component({
  selector: 'app-colleagues',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './colleagues.component.html',
  styleUrl: './colleagues.component.scss'
})
export class ColleaguesComponent {
  isVisible: boolean = false;
  constructor(
    private languageService: LanguageService,
    private elementRef: ElementRef,
    private visibilityService: VisibilityService
  ) {}

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

  ngOnInit(): void {
    this.visibilityService.addScrollListener(this.elementRef, (isVisible) => {
      this.isVisible = isVisible;
    });
  }


}
