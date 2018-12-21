import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef, Input } from '@angular/core';
import { ChartDataService } from '../chart.data.service';
import * as Highcharts from 'highcharts';
import { StockSymbol } from "../models/stocksymbol";

@Component({
  selector: 'app-stockbody',
  templateUrl: './stockbody.component.html',
  styleUrls: ['./stockbody.component.css']
})

export class StockbodyComponent implements OnInit, AfterViewInit, OnDestroy
{
	@Input() symbol: StockSymbol;
	@ViewChild('charts') public chartEl: ElementRef;

	constructor(private hcs: ChartDataService)
	{

  	}

	ngOnInit() {}

	ngAfterViewInit()
	{
		//this.createChart();
	}

	ngOnDestroy()
	{

	}

	createChart(symbol)
	{
		this.hcs.loadData(symbol, (symbol, data)=> {
			this.hcs.createChart(this.chartEl.nativeElement, symbol, data);
		});
	}
}