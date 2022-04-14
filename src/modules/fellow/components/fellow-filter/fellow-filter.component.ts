import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'fellow-filter',
  templateUrl: './fellow-filter.component.html',
  styleUrls: ['./fellow-filter.component.scss'],
})
export class FellowFilterComponent implements OnInit {
  constructor() {}

  @Output() searchByName = new EventEmitter<string>();
  @Output() searchByOffice = new EventEmitter<string>();
  @Output() sortChanged = new EventEmitter<number>();
  @Output() viewChanged = new EventEmitter<number>();
  @Input() officeList: Array<string> = [];
  public name: string = '';
  public office: string = '';
  public sort: number = 1;
  public view: number = 1;

  public sortingOptions = [
    {
      key: 1,
      value: 'Sort by name (asc)',
    },
    {
      key: 2,
      value: 'Sort by name (desc)',
    },
    {
      key: 3,
      value: 'Sort by office (asc)',
    },
    {
      key: 4,
      value: 'Sort by office (desc)',
    },
  ];

  ngOnInit(): void {}

  public searchName() {
    this.searchByName.emit(this.name);
  }

  public searchOffice() {
    this.searchByOffice.emit(this.office);
  }

  public sortSelected() {
    this.sortChanged.emit(this.sort);
  }

  public viewChange(event: number) {
    this.view = event;
    this.viewChanged.emit(event);
  }
}
