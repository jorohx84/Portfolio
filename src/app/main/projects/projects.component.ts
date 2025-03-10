import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { SingleprojectComponent } from '../../shared/singleproject/singleproject.component';
import { TranslatePipe, TranslateDirective } from "@ngx-translate/core";
import { LanguageService } from '../../language.service';
import { VisibilityService } from '../../visibility.service';
@Component({
  selector: 'app-projects',
  imports: [CommonModule, SingleprojectComponent, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
    isVisible: boolean = false;
  constructor(private languageService: LanguageService,  private elementRef: ElementRef, private visibilityService: VisibilityService) { }



  ngOnInit(): void {
    this.visibilityService.addScrollListener(this.elementRef, (isVisible) => {
      this.isVisible = isVisible;
    });
  }
}
