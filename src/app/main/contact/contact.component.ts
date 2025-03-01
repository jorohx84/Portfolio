import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ContactformComponent } from '../../shared/contactform/contactform.component';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ContactformComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
