import { CommonModule } from '@angular/common';
import { Component, OnInit, ElementRef } from '@angular/core';
import { ButtonsComponent } from '../../shared/buttons/buttons.component';
import { TranslatePipe } from "@ngx-translate/core";
import { LanguageService } from '../../language.service';
import { VisibilityService } from '../../visibility.service';

@Component({
  selector: 'app-aboutme',
  imports: [CommonModule, ButtonsComponent, TranslatePipe],
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

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