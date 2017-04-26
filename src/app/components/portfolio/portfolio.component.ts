import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {

  projects = [
    {"id": 1, "name": "MYagonism", "label": "myagonism-project", "url": "../app/images/portfolio/myagonism.png"},
    {"id": 2, "name": "coach-Agenda", "label": "coach-agenda-project", "url": "../app/images/portfolio/coach-agenda.png"},
    {"id": 3, "name": "Unicredit Dealer", "label": "dealer-project", "url": "../app/images/portfolio/unicredit-dealer.png"},
    {"id": 4, "name": "Unicredit Revolution", "label": "revolution-project", "url": "../app/images/portfolio/unicredit-revolution.png"},
    {"id": 5, "name": "Safety Bio Life", "label": "sbl-project", "url": "../app/images/portfolio/sbl.png"},
    {"id": 6, "name": "Paparelli", "label": "paparelli-project", "url": "../app/images/portfolio/paparelli.png"},
    {"id": 7, "name": "Fisios", "label": "fisios-project", "url": "../app/images/portfolio/fisios.png"},
    {"id": 8, "name": "Sir", "label": "sir-project", "url": "../app/images/portfolio/sir.png"},
    {"id": 9, "name": "Demasteel", "label": "demasteel-project", "url": "../app/images/portfolio/demasteel.png"}
  ]

  constructor() { }

  ngOnInit() {
  
  }

}
