
import { Component, OnInit } from '@angular/core';
import { SaveDataService } from '../../services/save-data.service';
import {LtlsSaveData} from '../../model/ltls-save-data';
import {LtlsResultsRepository} from '../../repository/ltls-results.repository';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  public historyRecords: LtlsSaveData[] = [];

  constructor(private dataSaver: SaveDataService,
              private repo: LtlsResultsRepository) {
  }

  ngOnInit() {
    this.dataSaver.loadResults();

    this.dataSaver.savedData.subscribe(data => {
      console.log('Printing Data:');
      this.historyRecords.push(data);
    });

    this.repo.loadData().then((data) => {
      this.historyRecords = data;
      console.log(data);
    });
  }
}
