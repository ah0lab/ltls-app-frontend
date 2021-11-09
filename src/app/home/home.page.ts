import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  gotoLearnSoundsPage() {
    this.router.navigate(['learn-sounds']);
  }

  gotoResourcesPage() {
    // TODO
  }

  gotoHistoryPage() {
    this.router.navigate(['history']);
  }

  gotoSettingsPage() {
    // TODO
  }
}
