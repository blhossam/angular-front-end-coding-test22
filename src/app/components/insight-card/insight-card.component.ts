import { Component } from '@angular/core';

import * as Json from 'src/assets/I10n/en_GB.json';

interface SubCard {
  title: string;
  question: string;
  by: string;
  name: string;
  description: string;
  apac: string;
}

@Component({
  selector: 'app-insight-card',
  templateUrl: './insight-card.component.html',
  styleUrls: ['./insight-card.component.scss']
})
export class InsightCardComponent {
  title: string;
  subCard: SubCard;

  constructor() {
    this.title = Json.insightCard.title;
    this.subCard = Json.insightCard.subCard;
  }
}
