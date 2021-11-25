import { LtlsFormant } from '../model/ltls-formant';
import {Injectable} from '@angular/core';
import { Storage } from '@ionic/storage';
import {LtlsSaveData} from '../model/ltls-save-data';

@Injectable({
  providedIn: 'root'
})
export class LtlsResultsRepository {
  constructor(private storage: Storage) {
    this.storage.create();
  }

  async init() {
    console.log('Storage Initialized!');
    const storage = await this.storage.create();
    this.storage = storage;
  }

  public saveData(data: LtlsSaveData) {
    this.storage.set(data.key, data);
  }

  public async loadData(): Promise<LtlsSaveData[]> {
    let keys: string[] = [];
    keys = await this.storage.keys();

    const savedData: LtlsSaveData[] = [];

    for (let key of keys) {
      this.storage.get(key).then(value => {
        console.log(value);
        savedData.push({
          key,
          wasHeard: value.wasHeard,
          datePerformed: value.datePerformed
        });
      });
    }
    return savedData;
  }
}
