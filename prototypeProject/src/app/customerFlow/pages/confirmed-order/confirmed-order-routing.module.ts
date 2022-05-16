import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmedOrderPage } from './confirmed-order.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmedOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmedOrderPageRoutingModule {}
