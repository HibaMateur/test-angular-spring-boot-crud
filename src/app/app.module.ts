import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateStockComponent } from './create-stock/create-stock.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';

import { StockDetailsComponent } from './stock-details/stock-details.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CreateStockComponent,
    StockListComponent,
    UpdateStockComponent,

    StockDetailsComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
