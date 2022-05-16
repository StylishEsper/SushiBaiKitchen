import { Injectable } from '@angular/core';
import { OrderedItemsService } from './ordered-items.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionProcessingService {

  private taxRate = 0.13;
  private deliveryFee = 4.00;


  constructor(private orderService: OrderedItemsService) {}

  public applyTaxRate(value: number): number{
    return Math.round((value+this.taxableValue(value)) * 100) / 100;
  }

  public taxableValue(value:number): number{
    return Math.round(value*this.taxRate * 100) / 100;
  }

  public getDeliveryFee(): number{
    return this.deliveryFee;
  }

  public getSubtotal(){
    var subTotal = 0;
    var i = 0;
    this.orderService.getAllItems().forEach(item => {
      subTotal += item.price*this.orderService.getItemQuantity(i);
      i+=1;
    });
    return subTotal;
  }

  public getTotal(){
    return this.applyTaxRate(this.getSubtotal())
  }
}
