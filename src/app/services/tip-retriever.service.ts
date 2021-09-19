import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Tip} from '../model/tip';
import {TipRepository} from '../model/tips-repository';

@Injectable({
  providedIn: 'root'
})
export class TipRetrieverService {

  constructor() { }

  private tipData: BehaviorSubject<Tip> = new BehaviorSubject<Tip>({Category: 0, Text: ''});

  loadTipData(): Observable<Tip> {
    const tips = TipRepository.GetTips();

    for (const tip of tips) {
      this.tipData.next(tip);
    }

    return this.tipData.asObservable();
  }
}
