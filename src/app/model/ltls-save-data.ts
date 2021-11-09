import { LtlsFormant } from './ltls-formant';

export interface LtlsSaveData {
  key: string;
  soundInfo: {
    formantData: LtlsFormant[]
  };
}
