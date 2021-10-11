import { Component, OnInit } from '@angular/core';
import {TutorialSlideContent} from '../../model/tutorial-slide-content';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  slideContent: TutorialSlideContent[] = [
    {
      text: 'Slide 1',
      image: '',
      link: ''
    },
    {
      text: 'Slide 2',
      image: '',
      link: ''
    },
    {
      text: 'Slide 3',
      image: '',
      link: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
