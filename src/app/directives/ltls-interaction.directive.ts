import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ltlsInteractionContainer]',
})
export class LtlsInteractionDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
