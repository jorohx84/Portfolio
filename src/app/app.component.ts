import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService, TranslatePipe, TranslateDirective } from "@ngx-translate/core";
import { LanguageService } from './language.service';  // Importiere den LanguageService


@Component({
  selector: 'app-root',

  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

constructor(private languageService: LanguageService) {
  // Initiale Sprache wird im Service gesetzt
}
}
