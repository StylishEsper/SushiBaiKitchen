import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';//allows for *ngFor in components
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { SimpleMenuItemComponent } from './simple-menu-item/simple-menu-item.component';
import { SimpleOrderItemComponent } from './simple-order-item/simple-order-item.component';
import { OrderItemModalComponent } from './modals/order-item-modal/order-item-modal.component';
import { ViewOrderModalComponent } from './modals/view-order-modal/view-order-modal.component';
import { StripePaymentComponent } from './stripe-payment/stripe-payment.component';



@NgModule({
    declarations: [
    SimpleMenuItemComponent,
    SimpleOrderItemComponent,
    OrderItemModalComponent,
    ViewOrderModalComponent,
    StripePaymentComponent,
  ],
    imports: [
      IonicModule,
      CommonModule,
      ReactiveFormsModule,
      FormsModule
    ],
    exports: [
      SimpleMenuItemComponent,
      SimpleOrderItemComponent,
      OrderItemModalComponent,
      ViewOrderModalComponent,
      StripePaymentComponent
    ],
    entryComponents: [],
})

export class CustomerComponentsModule{}
