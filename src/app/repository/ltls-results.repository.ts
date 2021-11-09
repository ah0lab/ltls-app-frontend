import { LtlsFormant } from '../model/ltls-formant';
import {Injectable} from '@angular/core';
import { Storage } from '@ionic/storage';
import {LtlsSaveData} from '../model/ltls-save-data';

@Injectable({
  providedIn: 'root'
})
export class LtlsResultsRepository {
  private repo: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this.repo = storage;
  }

  public saveData(data: LtlsSaveData) {
    console.log('Data Stored');
    this.storage?.set(data.key, JSON.stringify(data.soundInfo));
  }

  public async loadData(): Promise<LtlsSaveData[]> {
    let keys: string[] = [];
    keys = await this.storage.keys();

    const savedData: LtlsSaveData[] = [];

    for (let key of keys) {
      this.storage.get(key).then(value => {
        console.log(value);
        savedData.push(value);
      });
    }
    return savedData;
  }
}
