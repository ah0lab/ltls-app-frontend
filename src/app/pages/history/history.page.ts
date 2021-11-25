
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

  private records: LtlsSaveData[] = [];
  public historyRecords = new Map<string, LtlsSaveData[]>();

  constructor(private dataSaver: SaveDataService,
              private repo: LtlsResultsRepository) {
  }

  ngOnInit() {
    this.dataSaver.loadResults();

    this.dataSaver.savedData.subscribe(data => this.records = data);

    // Populate the history list
    for (const record of this.records) {
      // Use DD-MM-YYYY as map key
      const date = `${record.datePerformed.getDay()}-${record.datePerformed.getMonth()}-${record.datePerformed.getFullYear()}`

      if (this.historyRecords.has(date)) {
        this.historyRecords.get(date).push(record);
      } else {
        this.historyRecords.set(date, [record]);
      }
    }
  }
}
