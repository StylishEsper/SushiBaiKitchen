import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-incoming-order',
  templateUrl: './incoming-order.component.html',
  styleUrls: ['./incoming-order.component.scss'],
})
export class IncomingOrderComponent implements OnInit {

  @Input() order;

  constructor() { }

  ngOnInit() {}

}
