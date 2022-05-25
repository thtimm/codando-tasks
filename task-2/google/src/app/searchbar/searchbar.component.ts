import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  template: `
    <input type="text" ng-model="searchTerm" />
  `,
  styles: [
  ]
})
export class SearchbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    searchTerm: String;
  }

}
