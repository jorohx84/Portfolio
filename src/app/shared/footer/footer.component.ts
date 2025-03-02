import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WavebuttonComponent } from '../wavebutton/wavebutton.component';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, WavebuttonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
