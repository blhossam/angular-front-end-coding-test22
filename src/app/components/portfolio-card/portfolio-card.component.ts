import { Component } from '@angular/core';

import * as Json from 'src/assets/I10n/en_GB.json';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss']
})
export class PortfolioCardComponent {
  title: string;
  composeModel: string;
  notification: number;

  constructor() {
    this.notification = 12;
    this.title = Json.portfolioCard.title;
    this.composeModel = Json.portfolioCard.composeModel;
  }
}
