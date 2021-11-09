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
      title: 'Welcome!',
      paragraph: 'Vivamus vitae tempor lorem, non feugiat nunc. Donec eget tempus massa, eget interdum tellus.',
      headerImage: '../../../assets/img/star.png'
    },
    {
      title: 'LTLS Sounds',
      paragraph: 'Duis pellentesque pellentesque libero, id tincidunt nibh ullamcorper ac.',
      headerImage: '../../../assets/img/sound-wave.png'
    },
    {
      title: 'Listen!',
      paragraph: 'Praesent erat purus, semper vitae turpis in, mattis luctus mauris.',
      headerImage: '../../../assets/img/hearing.png',
      route: {
        path: '/home',
        linkText: 'Lets Go!'
      }
    }
  ];

  constructor() { }

  ngOnInit() { }

}
