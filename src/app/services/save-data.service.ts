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
  private data = new BehaviorSubject<LtlsSaveData>(null);
  public savedData = this.data.asObservable();

  constructor(private repo: LtlsResultsRepository) { }

  public saveResult(result: LtlsObject) {
  }

  public saveResultSet(resultSet: LtlsObject[]) {
    for (let result of resultSet) {
      this.repo.saveData({
        key: result.media.mediaName,
        soundInfo: {
          formantData: result.formant
        }
      });
    }
  }

  public loadResults() {
    this.repo.loadData().then((savedData) => {
      for (let result of savedData) {
        this.data.next(result);
      }
    }).catch(null);
  }
}
