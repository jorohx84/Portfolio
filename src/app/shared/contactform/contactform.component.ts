import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsComponent } from '../buttons/buttons.component';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { LanguageService } from '../../language.service';  
import { Router } from '@angular/router';


@Component({
  selector: 'app-contactform',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonsComponent, TranslatePipe ],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {
   constructor(private languageService: LanguageService, private router: Router) {}
  privacy = false;
  isError = false;

  isButtonDisabled: boolean = true;

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
          console.log(this.contactData);
        this.http.post(this.post.endPoint, this.post.body(this.contactData))
          .subscribe({
            next: (response) => {

              ngForm.resetForm();
            },
            error: (error) => {
              console.error(error);
            },
            complete: () => console.log('send post complete'),
          });
        }  else{
          this.isError = true;
        }
      } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
        
        ngForm.resetForm();

      }
  

  }

  toggleChecked() {
    this.privacy = !this.privacy
    if (this.privacy===true) {
      this.isError=false;
    }
  }

  isChecked() {
    return this.privacy === true;
  }

  loadLegals(path:string){
    this.router.navigate([path])
  }
}
