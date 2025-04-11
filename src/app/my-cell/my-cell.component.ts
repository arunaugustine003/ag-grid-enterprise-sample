import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-my-cell',
  template: `
    <button (click)="buttonClicked()">+</button>
    {{ value }}
  `,
  styleUrls: ['./my-cell.component.scss']
})
export class MyCellComponent implements ICellRendererAngularComp {

  public value!: string;

  agInit(params: ICellRendererParams): void {
    console.log("params", params);
    
    this.value = params.value;
  }
  refresh(params: ICellRendererParams): boolean {
    return true;
  }
  buttonClicked() {
    alert(`Action!`);
  }
}
