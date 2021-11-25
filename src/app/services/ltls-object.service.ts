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
  private data: BehaviorSubject<LtlsObject>;

  constructor(private soundRepo: LtlsSoundRepository) { }

  public loadObjects() {
    const sounds: LtlsObject[] = this.soundRepo.getSounds();
    this.objectList.next(sounds);
  }
}
