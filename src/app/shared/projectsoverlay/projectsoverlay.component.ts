import { CommonModule } from '@angular/common';
import { Component, Input, ElementRef, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ButtonsComponent } from '../buttons/buttons.component';
import { Router } from '@angular/router';
import { TranslatePipe, TranslateDirective } from "@ngx-translate/core";
import { LanguageService } from '../../language.service';
import { VisibilityService } from '../../visibility.service';
@Component({
  selector: 'app-projectsoverlay',
  imports: [CommonModule, HeaderComponent, ButtonsComponent, TranslatePipe],
  templateUrl: './projectsoverlay.component.html',
  styleUrl: './projectsoverlay.component.scss'
})
export class ProjectsoverlayComponent {
  @Input() title: string = '';
  @Input() line: string = '';
  @Input() descript: string = '';
  @Input() details: string = '';
  @Input() duration: string = '';
  @Input() skills: { imgPath: string, name: string }[] = [];
  @Input() image: string = '';
  @Input() path: string = '';
  @Input() sticker: string = '';
  @Input() github: string = '';
  @Input() projectPath: string = '';

  isVisible: boolean = false;

  constructor(private router: Router, private languageService: LanguageService, private elementRef: ElementRef, private visibilityService: VisibilityService) { }
  openOverlay(route: string) {
    this.router.navigate([route]);

  }

  ngOnInit(): void {
    window.scrollTo({ top: 0 })
    this.visibilityService.addScrollListener(this.elementRef, (isVisible) => {
      this.isVisible = isVisible;
    });
  }

  loadProject(path: string) {
    window.open(path)
  }

  goBack() {
    let projects = document.getElementById('projects');
    this.router.navigate(['main']).then(() => {
      projects?.scrollIntoView({ block: 'start' })

    });
  }
}

