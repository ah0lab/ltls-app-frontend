import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourceLoaderService {
  // set variable of the string
  // assets/<variable>.mp3
  constructor() { }

  returnSoundFile(sound: string){
  
      return `../../assets/${sound}.mp3`;

  }
}
