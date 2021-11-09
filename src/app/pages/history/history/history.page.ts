import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  constructor() { }

  ngOnInit() {

    //Array to hold all localStorage Values
    var sounds: string[] = this.allStorage();
    let test = "Test";
  }

  //Obtains all objects currently stored in localStorage
  allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        valueIndex = keys.length;

    while ( valueIndex >= 0) {
        values.push(localStorage.getItem(keys[valueIndex]) );
        valueIndex = valueIndex - 1;
    }
    return values;
}

  

}
