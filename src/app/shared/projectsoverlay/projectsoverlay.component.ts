import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ButtonsComponent } from '../buttons/buttons.component';
import { Router } from '@angular/router';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { LanguageService } from '../../language.service';  

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
  @Input() stickerClass: string = '';

 
  constructor(private router: Router, private languageService: LanguageService) {}
  openOverlay(route:string) {

    this.router.navigate([route]);

 

}
  
}

