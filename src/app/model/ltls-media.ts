export interface LtlsMedia {
  mediaName: string;
  mediaSource: string;
  wasPlayed: boolean;
  wasHeard: boolean;
  play(player: HTMLMediaElement);
  hasSource(): boolean;
}
