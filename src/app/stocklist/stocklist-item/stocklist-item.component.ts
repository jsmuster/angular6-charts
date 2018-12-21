import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { StockSymbol } from "../../models/stocksymbol";

@Component({
  selector: 'stocklist-item',
  templateUrl: './stocklist-item.component.html',
  styleUrls: ['./stocklist-item.component.css']
})
export class StockListItemComponent implements OnInit {
  @Input() symbol: StockSymbol;
  @Output() symbolSelected = new EventEmitter<StockSymbol>();
  constructor() { }

  ngOnInit() { }
  onSelected()
  {
    this.symbolSelected.emit(this.symbol);
  }

}
