import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StockService } from '../stock.service';
@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css'],
})
export class StockListComponent implements OnInit {
  stockList: any;

  constructor(private stockService: StockService, private router: Router) {}
  ngOnInit(): void {
    this.getAllStock();
  }

  getAllStock() {
    this.stockService.getAllStocks().subscribe((res) => {
      this.stockList = res;
    });
  }
  StockDetails(id: number) {
    this.router.navigate(['stock-details', id]);
  }

  updateStock(id: number) {
    this.router.navigate(['update-stock', id]);
  }

  deleteStock(id: number) {
    this.stockService.deleteStock(id).subscribe((data) => {
      console.log(data);
      this.getAllStock();
    });
  }
}
