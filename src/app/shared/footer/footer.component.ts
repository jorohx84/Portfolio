import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WavebuttonComponent } from '../wavebutton/wavebutton.component';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { LanguageService } from '../../language.service';  
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-footer',
  imports: [CommonModule, WavebuttonComponent, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private languageService: LanguageService, private router:Router) {}

  loadLegals(path:string){
    this.router.navigate([path])
  }

  reload() {
    window.scrollTo({top:0})
  
  }
}
