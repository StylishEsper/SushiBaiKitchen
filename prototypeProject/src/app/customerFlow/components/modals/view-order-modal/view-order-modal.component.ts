import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MenuItem } from 'src/app/models/menuItem';
import { OrderedItemsService } from 'src/app/services/ordered-items.service';
import { TransactionProcessingService } from 'src/app/services/transaction-processing.service';
import { OrderItemModalComponent } from '../order-item-modal/order-item-modal.component';

@Component({
  selector: 'app-view-order-modal',
  templateUrl: './view-order-modal.component.html',
  styleUrls: ['./view-order-modal.component.scss'],
})
export class ViewOrderModalComponent implements OnInit {

  constructor(public router: Router,public modalCtrl: ModalController, public orderService: OrderedItemsService, public transactionService: TransactionProcessingService) { }

  public subtotal;

  ngOnInit() {
    this.subtotal = 0;
    let i = 0;
    this.orderService.getAllItems().forEach(item => {
      this.subtotal+= item.price*this.orderService.getItemQuantity(i);
      i+=1;
    });
  }

  cancelOrder(){
    sessionStorage.removeItem("ordered");
    this.orderService.removeAll();
    this.closeModal();
  }

  roundValue(value: number): number{
    return Math.round(value * 100) / 100;
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  async viewItem(menuItem: MenuItem,quantity: number){
    const modal = await this.modalCtrl.create({
      component: OrderItemModalComponent,
      cssClass: 'OrderItemModal',
      componentProps: {
        menuItem: menuItem,
        quantity: quantity,
        removeFromOrder: true
      }
    });
    return await modal.present();
  }

  confirmOrder(){
    sessionStorage.setItem("ordered", "true");
    this.router.navigateByUrl('/confirmed-order');
    this.closeModal()
  }
}
