import { Component, OnInit } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { Fellow } from 'src/interfaces';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'fellow-list',
  templateUrl: './fellow-list.component.html',
  styleUrls: ['./fellow-list.component.scss'],
})
export class FellowListComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  public fullFellowList$: Observable<Array<Fellow>> = of([]);
  public filteredFellowList$: Observable<Array<Fellow>> = of([]);
  public officeList: Array<string> = [];
  public p: number = 1;
  private selectedOffice: string = '';
  private searchedName: string = '';
  public selectedSort: number = 0;
  public viewMode: number = 1;

  ngOnInit(): void {
    this.getFellowList();
  }

  getFellowList() {
    this.filteredFellowList$ = this.apiService.getFellowList().pipe(
      tap((list) => {
        this.fullFellowList$ = of(list);
        list.map(
          (fellow) =>
            fellow.office &&
            !this.officeList.includes(fellow.office) &&
            this.officeList.push(fellow.office)
        );
      })
    );
  }

  public searchByName(value: string) {
    this.searchedName = value;
    this.filter();
  }

  public searchByOffice(value: string) {
    this.selectedOffice = value;
    this.filter();
  }

  public sortChanged(value: any) {
    this.selectedSort = value;
    this.filter();
  }

  public viewChanged(value: number) {
    this.viewMode = value;
  }

  private filter() {
    this.filteredFellowList$ = this.fullFellowList$.pipe(
      map((list) => {
        return list.filter((x) =>
          this.selectedOffice
            ? x.office === this.selectedOffice &&
              x.name.toLowerCase().includes(this.searchedName.toLowerCase())
            : x.name.toLowerCase().includes(this.searchedName.toLowerCase())
        );
      })
    );
  }
}
