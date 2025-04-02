import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public columnDefs: ColDef[] = [
    { field: 'athlete', filter: 'agTextColumnFilter', floatingFilter: true },
    { field: 'age', filter: 'agNumberColumnFilter', floatingFilter: true },
    { field: 'country', filter: 'agTextColumnFilter', floatingFilter: true },
    { field: 'year', filter: 'agNumberColumnFilter', floatingFilter: true },
    { field: 'date', filter: 'agDateColumnFilter', floatingFilter: true },
    { field: 'sport', filter: 'agTextColumnFilter', floatingFilter: true },
    { field: 'gold', filter: 'agNumberColumnFilter', floatingFilter: true },
    { field: 'silver', filter: 'agNumberColumnFilter', floatingFilter: true },
    { field: 'bronze', filter: 'agNumberColumnFilter', floatingFilter: true },
    { field: 'total', filter: 'agNumberColumnFilter', floatingFilter: true },
  ];
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true
  };
  
  public rowData$!: Observable<any[]>;

  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.http
      .get<any[]>('https://www.ag-grid.com/example-assets/olympic-winners.json');
  }
}
