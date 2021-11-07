import {LtlsSound} from '../model/ltls-sound';
import {LtlsObject} from '../model/ltls-object';
import {LtlsFormant} from '../model/ltls-formant';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LtlsSoundRepository {
  private sounds: LtlsObject[] = [
    {
      id: 0,
      media: new LtlsSound('snake',
        '../../assets/cow.mp3',
        { src: '../../assets/snake.png' },
        'Sss!'),
      tips: {
        strategy: {text: ' '},
        lslTip: {text: ' '}
      },
      formant: [
        new LtlsFormant(5000, 6000, 30)
      ]
    },
    {
      id: 1,
      media: new LtlsSound('airplane',
        '../../assets/cow.mp3',
        { src: '../../assets/airplane.png' },
        'Ahhh!'),
      tips: {
        strategy: {text: 'Move closer instead of speaking louder'},
        lslTip: {text: 'Talk about the object before you shot it to the child'}
      },
      formant: [
        new LtlsFormant(768, 1030, 55),
        new LtlsFormant(1370, 1551, 55)
      ]
    },
    {
      id: 2,
      media: new LtlsSound('train',
        '../../assets/cow.mp3',
        { src: '../../assets/train.png' },
        'Ooo!'),
      tips: {
        strategy: {text: ' '},
        lslTip: {text: ' '}
      },
      formant: [
        new LtlsFormant(439, 460, 55),
        new LtlsFormant(1105, 1170, 55)
      ]
    }
  ];

  public getSounds(): LtlsObject[] {
    return this.sounds;
  }
}
