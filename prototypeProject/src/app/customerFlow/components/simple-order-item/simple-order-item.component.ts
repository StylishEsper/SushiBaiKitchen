import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-order-item',
  templateUrl: './simple-order-item.component.html',
  styleUrls: ['./simple-order-item.component.scss'],
})
export class SimpleOrderItemComponent implements OnInit {

  @Input() menuItem;
  @Input() quantity;

  constructor() { }

  ngOnInit() {}

  roundValue(value: number): number{
    return Math.round(value * 100) / 100;
  }

}
