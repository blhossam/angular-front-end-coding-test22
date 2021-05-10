import { Component } from '@angular/core';

import * as Json from 'src/assets/I10n/en_GB.json';

export interface PeriodicElement {
  portfolioModel: string;
  currentMV: string;
  currency: string;
  sup: number;
  subData?: Array<{ portfolioModel: string, currentMV: string }>;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { portfolioModel: 'AB Global Diversified - balanced', currency: 'EUR', sup: 5, currentMV: '3.8M' },
  { portfolioModel: 'Global Exposure - conservative', currency: 'GBP', sup: 2, currentMV: '2.5M' },
  {
    portfolioModel: 'Global Exposure - conservative', currency: 'USD', sup: 3, currentMV: '2.1M',
    subData: [
      { portfolioModel: 'Banca Alpi Marittime', currentMV: '1.1M' },
      { portfolioModel: 'ABC Bank', currentMV: '6K' },
      { portfolioModel: 'Sanlam Investments', currentMV: '4k' }
    ]
  },
];

@Component({
  selector: 'app-management-card',
  templateUrl: './management-card.component.html',
  styleUrls: ['./management-card.component.scss']
})
export class ManagementCardComponent {
  title: string;
  noification: number;
  displayedColumns: string[] = ['portfolioModel', 'currentMV', 'upAndDown'];
  dataSource = ELEMENT_DATA;
  opened: boolean;
  constructor() {
    this.title = Json.managementCard.title;
    this.noification = 10;
    this.opened = true;
  }

}
