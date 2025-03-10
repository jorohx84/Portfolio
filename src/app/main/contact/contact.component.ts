import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ContactformComponent } from '../../shared/contactform/contactform.component';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { LanguageService } from '../../language.service'; 
import { VisibilityService } from '../../visibility.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ContactformComponent, FooterComponent, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  isVisible: boolean = false;
  constructor(
    private languageService: LanguageService,
    private elementRef: ElementRef,
    private visibilityService: VisibilityService
  ) {}

  ngOnInit(): void {
    this.visibilityService.addScrollListener(this.elementRef, (isVisible) => {
      this.isVisible = isVisible;
    });
  }
}
