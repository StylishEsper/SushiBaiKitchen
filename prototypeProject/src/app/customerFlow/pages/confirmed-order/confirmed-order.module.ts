import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmedOrderPageRoutingModule } from './confirmed-order-routing.module';

import { ConfirmedOrderPage } from './confirmed-order.page';
import { CustomerComponentsModule } from '../../components/customer-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerComponentsModule,
    ConfirmedOrderPageRoutingModule
  ],
  declarations: [ConfirmedOrderPage]
})
export class ConfirmedOrderPageModule {}
