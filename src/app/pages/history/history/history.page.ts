import { Component, OnInit } from '@angular/core';
import { SaveDataService } from '../../../services/save-data.service';
import {LtlsSaveData} from '../../../model/ltls-save-data';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  public historyRecords: LtlsSaveData[] = [];

  constructor(private dataSaver: SaveDataService) { }

  ngOnInit() {
    this.dataSaver.loadResults();

    this.dataSaver.savedData.subscribe(data => {
      this.historyRecords.push(data);
    });

    /*
    var sounds: string[] = this.allStorage();
    let test = "Test";
     */
  }

  //Obtains all objects currently stored in localStorage
  /*
  allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        valueIndex = keys.length;

    while ( valueIndex >= 0) {
        values.push(localStorage.getItem(keys[valueIndex]) );
        valueIndex = valueIndex - 1;
    }
    return values;
}
   */
}
