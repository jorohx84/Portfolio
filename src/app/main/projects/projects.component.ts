import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SingleprojectComponent } from '../../shared/singleproject/singleproject.component';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { LanguageService } from '../../language.service';  

@Component({
  selector: 'app-projects',
  imports: [CommonModule, SingleprojectComponent, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  constructor(private languageService: LanguageService) {}
  hover = false;

  toggleHover() {
    this.hover = !this.hover;

  }

  isHover() {
    return this.hover === true;
  }
}
