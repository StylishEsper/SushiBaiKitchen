import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/models/menuItem';
import { OrderedItemsService } from 'src/app/services/ordered-items.service';
import { TransactionProcessingService } from 'src/app/services/transaction-processing.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.page.html',
  styleUrls: ['./receipt.page.scss'],
})
export class ReceiptPage implements OnInit {

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
    
    sessionStorage.removeItem("ordered");
  }

  redirectToHome()
  {
    sessionStorage.removeItem("ordered");
    this.router.navigateByUrl('/home');
  }
}
