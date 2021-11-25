import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { LtlsSoundRepository } from '../repository/ltls-sounds.repository';

import { LtlsSound } from '../model/ltls-sound';
import {LtlsObject} from '../model/ltls-object';

@Injectable({
  providedIn: 'root'
})
export class LtlsObjectService {
  private objectList = new BehaviorSubject<LtlsObject[]>(null);
  public ltlsObjects = this.objectList.asObservable();

  // set variable of the string
  // assets/<variable>.mp3
  private data: BehaviorSubject<LtlsObject>;
  constructor(private soundRepo: LtlsSoundRepository) { }

  public loadObjects() {
    console.log('test');
    // @ts-ignore
    // for (let ltlsObject: LtlsObject of this.soundRepo.getSounds()) {
    //   this.objectList.next(ltlsObject);
    // }

    const sounds: LtlsObject[] = this.soundRepo.getSounds();
    this.objectList.next(sounds);
    console.log(sounds);
    /*
    this.soundRepo.getSounds().then((loadedSounds) => {
      for (let result of loadedSounds){
        this.objectList.next(result);
        console.log(this.objectList);
        console.log(result);
      }
    });
   */
  }

  // TODO: Refactor this out when loadObjects is working
  returnSoundFile(sound: string){
    if (sound === 'cow') {
      return `../../assets/${sound}.mp3`;
    } else {
      return null;
    }
  }


  // public loadResults() {
  //   this.repo.loadData().then((savedData) => {
  //     for (let result of savedData) {
  //       this.data.next(result);
  //       console.log('pushing');
  //       console.log(result);
  //     }
  //   }).catch(null);
  // }
}
