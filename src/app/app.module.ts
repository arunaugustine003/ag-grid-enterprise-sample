import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { GridSampleComponent } from './grid-sample/grid-sample.component';
import 'ag-grid-enterprise';
import { MyCellComponent } from './my-cell/my-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    GridSampleComponent,
    MyCellComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
