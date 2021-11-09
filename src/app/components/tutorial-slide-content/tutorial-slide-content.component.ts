import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tutorial-slide-content',
  templateUrl: './tutorial-slide-content.component.html',
  styleUrls: ['./tutorial-slide-content.component.scss'],
})
export class TutorialSlideContentComponent implements OnInit {

  @Input() title: string;
  @Input() paragraph: string;
  @Input() headerImage: string;
  @Input() routePath = '';
  @Input() linkText = '';

  constructor() { }

  ngOnInit() {}

}
