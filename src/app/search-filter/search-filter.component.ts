import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  enterSearchValue:string='';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  enterSearchTextChanged(){
    this.searchTextChanged.emit(this.enterSearchValue);
  }

}
