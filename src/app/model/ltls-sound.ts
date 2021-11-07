import {LtlsMedia} from './ltls-media';
import {LtlsObject} from './ltls-object';
import {LtlsTip} from './ltls-tip';
import {LtlsTipSet} from './ltls-tip-set';

export class LtlsSound implements LtlsMedia {

  private played = false;
  private heard = false;

  constructor(
    private soundName: string,
    private soundSource: string,
    private soundVisual: { src: string },
    private soundVisualText: string)
  {
  }

  public play(player: HTMLAudioElement) {
      player.src = this.soundSource;
      player.load();
      player.play();
      this.played = true;
  }

  get mediaName(): string {
    return this.soundName;
  }

  get mediaSource(): string {
    return this.soundSource;
  }

  get visualSource(): string {
    return this.soundVisual.src;
  }

  get visualText(): string {
    return this.soundVisualText;
  }

  get wasHeard(): boolean {
    return this.heard;
  }

  set wasHeard(value) {
    this.heard = value;
  }

  get wasPlayed(): boolean {
    return this.played;
  }

  set wasPlayed(value) {
    this.played = value;
  }

  // TODO: Actually check if the file the path is pointing to exists
  hasSource(): boolean { return this.soundSource.length === 0; }
}
