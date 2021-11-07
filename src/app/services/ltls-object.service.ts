import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { LtlsSoundRepository } from '../repository/ltls-sounds.repository';

import { LtlsSound } from '../model/ltls-sound';
import {LtlsObject} from '../model/ltls-object';

@Injectable({
  providedIn: 'root'
})
export class LtlsObjectService {
  private objectList = new BehaviorSubject<LtlsObject>(null);
  public ltlsObjects = this.objectList.asObservable();

  // set variable of the string
  // assets/<variable>.mp3
  constructor(private soundRepo: LtlsSoundRepository) { }

  public loadObjects() {
    // @ts-ignore
    for (let ltlsObject: LtlsObject of this.soundRepo.getSounds()) {
      this.objectList.next(ltlsObject);
    }
  }

  // TODO: Refactor this out when loadObjects is working
  returnSoundFile(sound: string){
    if (sound === 'cow') {
      return `../../assets/${sound}.mp3`;
    } else {
      return null;
    }
  }
}
