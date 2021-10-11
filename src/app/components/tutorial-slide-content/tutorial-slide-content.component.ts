import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tutorial-slide-content',
  templateUrl: './tutorial-slide-content.component.html',
  styleUrls: ['./tutorial-slide-content.component.scss'],
})
export class TutorialSlideContentComponent implements OnInit {

  @Input() text: string;
  @Input() image: string;
  @Input() link: string;

  constructor() { }

  ngOnInit() {}

}
