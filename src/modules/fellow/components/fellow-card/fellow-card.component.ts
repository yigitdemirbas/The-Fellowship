import { Component, Input, OnInit } from '@angular/core';
import { Fellow } from 'src/interfaces';
import {
  faLinkedinIn,
  faStackOverflow,
  faGithubAlt,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'fellow-card',
  templateUrl: './fellow-card.component.html',
  styleUrls: ['./fellow-card.component.scss'],
})
export class FellowCardComponent implements OnInit {
  constructor() {}

  @Input() fellow: Fellow;
  @Input() viewMode: number;
  public linkedInIcon = faLinkedinIn;
  public stackoverflowIcon = faStackOverflow;
  public githubIcon = faGithubAlt;
  public twitterIcon = faTwitter;

  ngOnInit(): void {}
}
