import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ltls-sound-visual',
  templateUrl: './ltls-sound-visual.component.html',
  styleUrls: ['./ltls-sound-visual.component.scss'],
})
export class LtlsSoundVisualComponent implements OnInit {
  @Input() visualSource: string;
  @Input() visualMask = '../../assets/cloud.png';
  @Input() reveal = false;
  @Input() visualText: string;

  constructor() { }

  ngOnInit() {}

}
