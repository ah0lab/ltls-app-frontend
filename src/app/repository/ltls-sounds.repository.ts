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
        '../../assets/Sss/Snake1.mp3',
        { src: '../../assets/Sss/SnakeLTLS.png' },
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
        '../../assets/Ahhhh/Airplane1.mp3',
        { src: '../../assets/Ahhhh/Airplane.png' },
        'Ahhh!'),
      tips: {
        strategy: {text: 'Move closer instead of speaking louder'},
        lslTip: {text: 'Talk about the object before you show it to the child'}
      },
      formant: [
        new LtlsFormant(768, 1030, 55),
        new LtlsFormant(1370, 1551, 55)
      ]
    },
    {
      id: 2,
      media: new LtlsSound('train',
        '../../assets/Oooo/Train1.mp3',
        { src: '../../assets/Oooo/TrainLTLS.png' },
        'Ooo!'),
      tips: {
        strategy: {text: ' '},
        lslTip: {text: ' '}
      },
      formant: [
        new LtlsFormant(439, 460, 55),
        new LtlsFormant(1105, 1170, 55)
      ]
    },
    {
      id: 3,
      media: new LtlsSound('IceCream',
        '../../assets/Mmm/IceCream1.mp3',
        { src: '../../assets/Mmm/IcecreamLTLS.png' },
        'Mmm!'),
      tips: {
        strategy: {text: 'Move closer instead of speaking louder'},
        lslTip: {text: 'Talk about the object before you show it to the child'}
      },
      formant: [
        new LtlsFormant(768, 1030, 55),
        new LtlsFormant(1370, 1551, 55)
      ]
    },
    {
      id: 4,
      media: new LtlsSound('baby',
        '../../assets/Sh/Baby1.mp3',
        { src: '../../assets/Sh/LTLS.png' },
        'Sh!'),
      tips: {
        strategy: {text: 'Move closer instead of speaking louder'},
        lslTip: {text: 'Talk about the object before you show it to the child'}
      },
      formant: [
        new LtlsFormant(768, 1030, 55),
        new LtlsFormant(1370, 1551, 55)
      ]
    },
    {
      id: 5,
      media: new LtlsSound('rollercoaster',
        '../../assets/Whee/RollerCoaster1.mp3',
        { src: '../../assets/Whee/Wheee.png' },
        'Wheee!'),
      tips: {
        strategy: {text: 'Move closer instead of speaking louder'},
        lslTip: {text: 'Talk about the object before you show it to the child'}
      },
      formant: [
        new LtlsFormant(768, 1030, 55),
        new LtlsFormant(1370, 1551, 55)
      ]
    }
    
  ];

  public getSounds(): LtlsObject[] {
    return this.sounds;
  }
}
