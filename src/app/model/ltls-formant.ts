export class LtlsFormant {
  constructor(
    public freqLow: number,
    public freqHigh: number,
    public intensity: number) { }

  public equals(other: LtlsFormant): boolean {
    if (other.freqLow !== this.freqLow) { return false; }
    if (other.freqHigh !== this.freqHigh) { return false; }
    if (other.intensity !== this.intensity) { return false; }
    return true;
  }
}
