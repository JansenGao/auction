import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  private stocks: Array<Stock>;

  constructor() { }

  ngOnInit() {
    this.stocks = [
      new Stock(1, '第一只股票', 1.99, 3.5, '这是第一只股票,是我在学习慕课网Angular入门实战时创建的', ['IT', '互联网']),
      new Stock(1, '第二只股票', 2.99, 2.5, '这是第二只股票，是我在学习慕课网Angular入门实战时创建的', ['金融']),
      new Stock(1, '第三只股票', 3.99, 0.5, '这是第三只股票，是我在学习慕课网Angular入门实战时创建的', ['IT']),
      new Stock(1, '第四只股票', 4.99, 1.5, '这是第四只股票，是我在学习慕课网Angular入门实战时创建的', ['互联网']),
      new Stock(1, '第五只股票', 5.99, 3.0, '这是第五只股票，是我在学习慕课网Angular入门实战时创建的', ['金融']),
      new Stock(1, '第六只股票', 6.99, 5.0, '这是第六只股票，是我在学习慕课网Angular入门实战时创建的', ['IT', '金融']),
      new Stock(1, '第七只股票', 6.99, 5.0, '这是第七只股票，是我在学习慕课网Angular入门实战时创建的', ['金融', '互联网']),
      new Stock(1, '第八只股票', 6.99, 5.0, '这是第八只股票，是我在学习慕课网Angular入门实战时创建的', ['IT', '互联网']),
    ];
  }

}

export class Stock {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public category: Array<string>) {

    }
}
