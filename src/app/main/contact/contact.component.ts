import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ContactformComponent } from '../../shared/contactform/contactform.component';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { LanguageService } from '../../language.service'; 

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ContactformComponent, FooterComponent, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(private languageService: LanguageService) {}
}
