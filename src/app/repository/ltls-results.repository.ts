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

  /*
   * Initialize Local storage
   */
  async init() {
    console.log('Storage Initialized!');
    const storage = await this.storage.create();
    this.storage = storage;
  }

  /*
   * Save data to local storage
   */
  public saveData(data: LtlsSaveData) {
    this.storage.set(data.key, data);
  }

  public async loadData(): Promise<LtlsSaveData[]> {
    let keys: string[] = [];
    keys = await this.storage.keys();

    const savedData: LtlsSaveData[] = [];

    for (const key of keys) {
      // Retrieve data from local storage
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
