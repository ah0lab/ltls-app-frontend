export class LtlsFormant {
  constructor(
    private freqLow: number,
    private freqHigh: number,
    private intensity: number) { }

  public equals(other: LtlsFormant): boolean {
    if (other.freqLow !== this.freqLow) { return false; }
    if (other.freqHigh !== this.freqHigh) { return false; }
    if (other.intensity !== this.intensity) { return false; }
    return true;
  }
}
