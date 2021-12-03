import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { StockListComponent } from './stock-list/stock-list.component';
import { CreateStockComponent } from './create-stock/create-stock.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';

const routes: Routes = [
  { path: 'stocks', component: StockListComponent },
  { path: 'create-stock', component: CreateStockComponent },
  { path: '', redirectTo: 'stocks', pathMatch: 'full' },
  { path: 'update-stock/:idStock', component: UpdateStockComponent },
  { path: 'stock-details/:idStock', component: StockDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
