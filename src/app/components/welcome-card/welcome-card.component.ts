import { Component, OnInit } from '@angular/core';
import * as Json from 'src/assets/I10n/en_GB.json';

@Component({
  selector: 'app-welcome-card',
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.scss']
})
export class WelcomeCardComponent implements OnInit {
  title: string;
  welcome: string;
  content: string;

  constructor() {
    this.title = Json.welcomeCard.title;
    this.welcome = Json.welcomeCard.welcome;
    this.content = Json.welcomeCard.content;
  }

  ngOnInit() {
  }

}
