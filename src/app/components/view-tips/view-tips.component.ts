import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-tips',
  templateUrl: './view-tips.component.html',
  styleUrls: ['./view-tips.component.scss'],
})
export class ViewTipsComponent implements OnInit {

  flagApp: boolean;
  flagParent: boolean;
  flagHear: boolean;

  tipApp: string[];
  tipParent: string[];
  tipHear: string[];


  constructor() { }

  ngOnInit() {
    this.flagApp = false;
    this.flagParent = false;
    this.flagHear = false;

    this.tipApp = ['This is app tip 1', 'this is app tip 2!'];
    this.tipParent = ['This is a tip for parents using the app!', 'Another tip for the parents :)'];
    this.tipHear = ['Try moving the phone closer!', 'Try turning up the sound on your device!'];
  }

  toggleApp(){
    this.flagApp = !this.flagApp;
  }

  toggleParent(){
    this.flagParent = !this.flagParent;
  }

  toggleHear(){
    this.flagHear = !this.flagHear;
  }

}
