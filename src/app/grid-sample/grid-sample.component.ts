import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
// node_modules\ag-grid-community\dist\styles\ag-grid.min.css
// node_modules\ag-grid-community\dist\styles\ag-theme-alpine.css
import 'ag-grid-community/dist/styles/ag-grid.min.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

@Component({
  selector: 'app-grid-sample',
  templateUrl: './grid-sample.component.html',
  styleUrls: ['./grid-sample.component.scss']
})
export class GridSampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  rowData = [
    { carMake: "Tesla", model:"Model Y", price: 64950, electric: true },
    { carMake: "Ford", model:"F-Series", price: 33850, electric: false },
    { carMake: "Toyota", model:"Corolla", price: 29600, electric: false }
  ];

  colDefs: ColDef[] = [
    { 
      valueGetter: p=> p.data.carMake + ' ' + p.data.price,
      headerName: "Company"
    },
    { field: "carMake" },
    { field: "model" },
    { 
      field: "price",
      valueFormatter: p => "£" + p.value.toLocaleString()
    },
    { field: "electric" }
  ];

}
