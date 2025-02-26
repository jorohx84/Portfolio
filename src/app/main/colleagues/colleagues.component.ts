import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-colleagues',
  imports: [CommonModule],
  templateUrl: './colleagues.component.html',
  styleUrl: './colleagues.component.scss'
})
export class ColleaguesComponent {
  arrow = false;

  thoughts = [
    {
      name: 'Ramona Hombeuel',
      job: 'Business Development',
      linkedin: '',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusamus est iste sed laudantium aspernatur cupiditate alias rem quidem, ipsam assumenda delectus. Voluptas eos optio dolores sequi illum cumque sunt.'
    },
    {
      name: 'Nadine Taenzer',
      job: 'Sales Administrative',
      linkedin: '',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusamus est iste sed laudantium aspernatur cupiditate alias rem quidem, ipsam assumenda delectus. Voluptas eos optio dolores sequi illum cumque sunt.'
    },
    {
      name: 'Dr. Volker Nagel',
      job: 'Sales Director',
      linkedin: '',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusamus est iste sed laudantium aspernatur cupiditate alias rem quidem, ipsam assumenda delectus. Voluptas eos optio dolores sequi illum cumque sunt.'
    },

  ];




  changeArrow() {
    this.arrow = !this.arrow;
  }

  isArrow() {
    return this.arrow === true;
  }

}
