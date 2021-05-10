import { Component } from '@angular/core';

import * as Json from 'src/assets/I10n/en_GB.json';

@Component({
  selector: 'app-strategie-card',
  templateUrl: './strategie-card.component.html',
  styleUrls: ['./strategie-card.component.scss']
})
export class StrategieCardComponent {
  title: string;
  name: string;
  description: string;
  viewSettings: string;
  notification: number;

  constructor() {
    this.title = Json.startegieCard.title;
    this.name = Json.startegieCard.name;
    this.description = Json.startegieCard.description;
    this.viewSettings = Json.startegieCard.viewSettings;
    this.notification = 5;
  }
}
