import {LtlsMedia} from './ltls-media';
import {LtlsTip} from './ltls-tip';
import {LtlsTipSet} from './ltls-tip-set';
import {LtlsFormant} from './ltls-formant';

export interface LtlsObject {
  id: number;
  media: LtlsMedia;
  tips: LtlsTipSet;
  formant: LtlsFormant[];
}
