import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective } from "@ngx-translate/core";
import { LanguageService } from '../../language.service';
import { HeaderComponent } from '../../shared/header/header.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-privacypolicy',
  imports: [CommonModule, TranslatePipe, HeaderComponent],
  templateUrl: './privacypolicy.component.html',
  styleUrl: './privacypolicy.component.scss'
})
export class PrivacypolicyComponent {
  constructor(private languageService: LanguageService, private router: Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
  goBack() {
    this.router.navigate(['main']).then(() => {
      window.scrollTo(0, 0);
    });
  }
}

