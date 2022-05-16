import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuItem } from 'src/app/models/menuItem';
import { OrderedItemsService } from 'src/app/services/ordered-items.service';
import { TransactionProcessingService } from 'src/app/services/transaction-processing.service';

@Component({
  selector: 'app-order-item-modal',
  templateUrl: './order-item-modal.component.html',
  styleUrls: ['./order-item-modal.component.scss'],
})
export class OrderItemModalComponent implements OnInit {

  @Input() menuItem: MenuItem;
  @Input() removeFromOrder: boolean = false;
  @Input() quantity = 1;

  constructor(public modalCtrl: ModalController, public transactionService: TransactionProcessingService, public orderService: OrderedItemsService) { }

  ngOnInit() {}

  roundValue(value: number): number{
    return Math.round(value * 100) / 100;
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  AddToOrder(){
    this.orderService.addMenuItem(this.menuItem,this.quantity);
    this.closeModal();
  }

  RemoveFromOrder(){
    this.orderService.removeMenuItem(this.menuItem);
    this.closeModal();
  }

}
