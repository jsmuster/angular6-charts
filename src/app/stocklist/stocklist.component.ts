import { Component, OnInit, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { StockSymbol } from "../models/stocksymbol";

@Component({
  selector: 'app-stocklist',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.css']
})

export class StocklistComponent implements OnInit
{
	@Output() selectedStockSymbol = new EventEmitter<StockSymbol>();

	private changeInterval: number = 5000;

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

	constructor(private cdr: ChangeDetectorRef) { }

	ngOnInit()
	{

	}

	ngAfterViewInit()
	{
		this.cdr.detach();

		/* execute change interval every so often as based on change configuration */
		if(this.changeInterval > 0)
		{
			setInterval(() => {
				this.update();

			}, this.changeInterval);
		}
	}

	/**
	* The update method will control the change detection. Component will update only when change detection is called.
	*/
	update()
	{
		this.cdr.detectChanges();
	}

	onStockSymbolSelected(symbol: StockSymbol)
	{
		this.selectedStockSymbol.emit(symbol);
	}
}
