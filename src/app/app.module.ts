import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StocklistComponent } from './stocklist/stocklist.component';
import { StockListItemComponent } from './stocklist/stocklist-item/stocklist-item.component';
import { StockbodyComponent } from './stockbody/stockbody.component';

import { ChartDataService } from './chart.data.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StocklistComponent,
    StockListItemComponent,
    StockbodyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ChartDataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
