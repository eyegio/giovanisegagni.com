import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {

  projects = [
    {"id": 1, "name": "MYagonism", "label": "myagonism-project", "url": "../assets/images/portfolio/myagonism.png"},
    {"id": 2, "name": "coach-Agenda", "label": "coach-agenda-project", "url": "../assets/images/portfolio/coach-agenda.png"},
    {"id": 3, "name": "Safety Bio Life", "label": "sbl-project", "url": "../assets/images/portfolio/sbl.png"},
    {"id": 4, "name": "Unicredit Revolution", "label": "revolution-project", "url": "../assets/images/portfolio/unicredit-revolution.png"},
    {"id": 5, "name": "Unicredit Dealer", "label": "dealer-project", "url": "../assets/images/portfolio/unicredit-dealer.png"},
    {"id": 6, "name": "Sir", "label": "sir-project", "url": "../assets/images/portfolio/sir.png"},
    {"id": 7, "name": "Jolly", "label": "jolly-project", "url": "../assets/images/portfolio/jolly.png"},
    {"id": 8, "name": "Fisios", "label": "fisios-project", "url": "../assets/images/portfolio/fisios.png"},
    {"id": 9, "name": "Paparelli", "label": "paparelli-project", "url": "../assets/images/portfolio/paparelli.png"},
    {"id": 10, "name": "Demasteel", "label": "demasteel-project", "url": "../assets/images/portfolio/demasteel.png"}
  ]

  constructor() { }

  ngOnInit() {

  }

}
