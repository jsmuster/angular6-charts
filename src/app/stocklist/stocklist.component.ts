import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { StockSymbol } from "../models/stocksymbol";

@Component({
  selector: 'app-stocklist',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.css']
})

export class StocklistComponent implements OnInit
{
	@Output() selectedStockSymbol = new EventEmitter<StockSymbol>();
	
	public symbols: StockSymbol[] = [
    new StockSymbol("ATVI", "ATVI", 46.77, -1.25),
    new StockSymbol("W", "W", 85.48, 0.85),
    new StockSymbol("SQ", "SQ", 54.77, 1.37),
    new StockSymbol("GDDY", "GDDY", 61.22, 3.28),
    new StockSymbol("AMD", "AMD", 17.89, -0.75),
    new StockSymbol("MTCH", "MTCH", 40.61, 2.02),
    new StockSymbol("TRXC", "TRXC", 2.38, 0.17),
    new StockSymbol("DDE", "DDE", 47.08, 4.75)
  ];

  constructor() { }

  ngOnInit() {
  }

  onStockSymbolSelected(symbol: StockSymbol)
  {
  	this.selectedStockSymbol.emit(symbol);
  }
}
