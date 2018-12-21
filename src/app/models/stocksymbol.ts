export class StockSymbol
{
  id: string;
  title: string;
  price: number;
  change: number;
  
  constructor(id: string, title: string, price: number, change: number)
  {
    this.id = id;
    this.title = title;
    
    this.price = price;
    this.change = change;
  }
}
