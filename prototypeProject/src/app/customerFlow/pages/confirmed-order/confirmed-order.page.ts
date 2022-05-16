import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OrderedItemsService } from 'src/app/services/ordered-items.service';
import { TransactionProcessingService } from 'src/app/services/transaction-processing.service';

declare var Stripe;

@Component({
  selector: 'app-confirmed-order',
  templateUrl: './confirmed-order.page.html',
  styleUrls: ['./confirmed-order.page.scss'],
})
export class ConfirmedOrderPage implements OnInit {

  cardDetails: any;

  @ViewChild('stripeButton',{read:ElementRef}) stripeButton : ElementRef;
  constructor(public router: Router,public orderService: OrderedItemsService, public transactionService: TransactionProcessingService) { }

  ngOnInit() 
  {
    if (sessionStorage.getItem("loggedIn") == null ||
    sessionStorage.getItem("ordered") == null) 
    {
      this.router.navigateByUrl('/login');
      return;
    }
    console.log(this.orderService.getAllItems());
  }

  roundValue(value: number): number{
    return Math.round(value * 100) / 100;
  }

  cancelOrder(){
    sessionStorage.removeItem("ordered");
    this.orderService.removeAll();
    this.router.navigateByUrl('/home');
  }
}
