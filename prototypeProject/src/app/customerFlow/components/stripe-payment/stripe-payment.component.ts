import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionProcessingService } from 'src/app/services/transaction-processing.service';

declare var Stripe;

@Component({
  selector: 'app-stripe-payment',
  templateUrl: './stripe-payment.component.html',
  styleUrls: ['./stripe-payment.component.scss'],
})
export class StripePaymentComponent implements OnInit {

  public errorsExist = true;
  stripe = Stripe('pk_test_XwRn88Fmqzh3966EVK92hpJY00jGOfGKPt');
  card: any;
  // paymentAmount: string = '3.33';
  // currency: string = 'USD';
  // currencyIcon: string = '$';
  // stripeKey: string = "pk_test_XwRn88Fmqzh3966EVK92hpJY00jGOfGKPt";
  constructor(public router: Router, public transactionService: TransactionProcessingService) { }

  ngOnInit() {
    this.setupStripe();
  }

  redirectToReceipt()
  {
    if (!this.errorsExist) this.router.navigateByUrl('/receipt');
  }
 /**
     * Sets up Stripe Elements and listens for form submission
     */
  setupStripe(){
    //Set up a stripe element, add some base styles, create a card and then mount it onto the view
    let elements = this.stripe.elements();
    var style = {
        base: {
          color: '#32325d',
          lineHeight: '24px',
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSmoothing: 'antialiased',
          fontSize: '16px',
          '::placeholder': {
            color: '#aab7c4'
          }
        },
        invalid: {
          color: '#fa755a',
          iconColor: '#fa755a'
        }
    };
    //loads the card elements and styles it
    this.card = elements.create('card', { style: style });
    // *** CONSOLE LOG ***
    console.log(this.card);
    this.card.mount('#card-element');
    //Listen for errors and submit events
    this.card.addEventListener('change', event => {
        var displayError = document.getElementById('card-errors');
        if (event.error) {
            displayError.textContent = event.error.message;
            this.errorsExist = true;
        } else {
            displayError.textContent = '';
            this.errorsExist = false;
        }
    });
    //Get the form data and listen for submission
    var form = document.getElementById('payment-form');
    form.addEventListener('submit', event => {
        event.preventDefault();
        // ***** LOG *****
        console.log(event);

        // create a single payment token and send it to Stripe server
        // if it fails show errors, if it succeeds call makePayment with token
        // this.stripe.createToken(this.card).then(result => {
        //     if (result.error) {
        //         var errorElement = document.getElementById('card-errors');
        //         errorElement.textContent = result.error.message;
        //     } else {
        //         // ***** LOG *****
        //         console.log(result);
        //         console.log(result.token.id);

        //         //Calls makePayment method and sends the token with it
        //         //this.makePayment(result.token.id);
        //     }
        // });
    });
}
}
