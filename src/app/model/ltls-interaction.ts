export interface LtlsInteraction {
  showLslTip();
  showStrategy();
  nextInteraction();
  endInteraction();
  // Whether or not the listener was receptive
  // to the test. Used to be cannotHear/ canHear
  wasReceptive(result: boolean);
  restartInteraction();
}
