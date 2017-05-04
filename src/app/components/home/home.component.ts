import { Component, OnInit } from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(-400%)', opacity: 0}),
          animate('500ms 1.5s ease-in', style({transform: 'translateX(0)', opacity: 1}))
        ])
      ]
    )
  ],
})
export class HomeComponent implements OnInit {
  show: boolean = true;

  constructor() {
  }


  ngOnInit() {
  }

}
