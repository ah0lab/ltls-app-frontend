import { Component, OnInit } from '@angular/core';
import { TIP_CATEGORY } from '../../model/tip-category';
import { TipRetrieverService } from '../../services/tip-retriever.service';
import { Tip } from '../../model/tip';

@Component({
  selector: 'app-view-tips',
  templateUrl: './view-tips.component.html',
  styleUrls: ['./view-tips.component.scss'],
})
export class ViewTipsComponent implements OnInit {

  flagApp: boolean;
  flagParent: boolean;
  flagHear: boolean;

  tipApp: Tip[] = [
    {
      Category: 0,
      Text: "This is an app tip!"
    }
  ];
  tipParent: Tip[] = [
    {
      Category: 0,
      Text: "This is a Parent Tip!"
    }
  ];
  tipHear: Tip[] = [];


  constructor(private tips: TipRetrieverService) { }

  ngOnInit() {
    this.tips.loadTipData().subscribe(tip => {
      console.log(tip);
      switch (tip.Category) {
        case TIP_CATEGORY.APP: {
          this.tipApp.push(tip);
          break;
        }
        case TIP_CATEGORY.PARENT: {
          this.tipParent.push(tip);
          break;
        }
        case TIP_CATEGORY.HEARING: {
          this.tipHear.push(tip);
          break;
        }
      }
    });

    this.flagApp = false;
    this.flagParent = false;
    this.flagHear = false;
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
