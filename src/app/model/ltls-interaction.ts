export interface LtlsInteraction {
  showLslTip();
  showStrategy();
  nextInteraction();
  // Close the interaction
  endInteraction();
  // Action taken whether or not the listener was receptive
  //  to the test
  wasReceptive(result: boolean);
  restartInteraction();
}
