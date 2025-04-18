import { CommonModule } from '@angular/common';
import { Component, inject, ElementRef, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsComponent } from '../buttons/buttons.component';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { TranslatePipe, TranslateDirective } from "@ngx-translate/core";
import { LanguageService } from '../../language.service';
import { Router } from '@angular/router';
import { VisibilityService } from '../../visibility.service';

@Component({
  selector: 'app-contactform',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonsComponent, TranslatePipe],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {
  constructor(private languageService: LanguageService, private router: Router, private elementRef: ElementRef,
    private visibilityService: VisibilityService) { }
  privacy = false;
  isError = false;
  isVisible: boolean = false;
  isButtonDisabled: boolean = true;
  isSend: boolean = false
  http = inject(HttpClient);
  contactData = {
    name: "",
    email: "",
    message: "",
  }

  mailTest = true;

  post = {
    endPoint: 'https://johannes-roth.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: any) {

    if (ngForm.valid && ngForm.submitted) {
      if (this.privacy === true) {
        this.isError = false;
        this.http.post(this.post.endPoint, this.post.body(this.contactData))
          .subscribe({
            next: (response) => {

              ngForm.resetForm();
            },
            error: (error) => {
              console.error(error);
            },
            
          });
        this.privacy = false;
        this.showFeedback();
      } else {
        this.isError = true;

      }
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();

    }


  }

  ngOnInit(): void {
    this.visibilityService.addScrollListener(this.elementRef, (isVisible) => {
      this.isVisible = isVisible;
    });
  }



  toggleChecked() {
    this.privacy = !this.privacy
    if (this.privacy === true) {
      this.isError = false;
    }
  }

  isChecked() {
    return this.privacy === true;
  }

  loadLegals(path: string) {
    this.router.navigate([path])
  }

  showFeedback() {
    this.isSend = true
    setTimeout(() => {
      this.isSend = false
    }, 3500);
  }
}
