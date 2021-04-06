import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourceLoaderService {
  // set variable of the string
  // assets/<variable>.mp3
  constructor() { }

  returnSoundFile(sound: string){
    if (sound === 'cow') {
      return `../../assets/${sound}.mp3`;
    } else {
      return null;
    }
  }
}
