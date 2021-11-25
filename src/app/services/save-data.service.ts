import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { LtlsFormant } from '../model/ltls-formant';
import {LtlsResultsRepository} from '../repository/ltls-results.repository';
import {LtlsSaveData} from '../model/ltls-save-data';
import {LtlsObject} from '../model/ltls-object';

@Injectable({
  providedIn: 'root'
})
export class SaveDataService {
  private data = new BehaviorSubject<LtlsSaveData[]>([{
    key: 'NA',
    wasHeard: false,
    datePerformed: new Date()
  }]);
  public savedData = this.data.asObservable();

  constructor(private repo: LtlsResultsRepository) { }

  public saveResult(saveData: LtlsSaveData) { this.repo.saveData(saveData); }

  public loadResults() {
    this.repo.loadData().then((savedData) => {
      /*
      for (let result of savedData) {
        this.data.next(result);
        console.log('pushing');
        console.log(result);
      }
      */
      this.data.next(savedData);
    }).catch(null);
  }
}
