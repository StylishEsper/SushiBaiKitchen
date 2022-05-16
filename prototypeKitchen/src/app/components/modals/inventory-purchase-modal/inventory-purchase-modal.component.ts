import { Component, DebugElement, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HomePage } from 'src/app/home/home.page';
import { Ingredients, MenuItem } from 'src/app/models/menuItem';

@Component({
  selector: 'app-inventory-purchase-modal',
  templateUrl: './inventory-purchase-modal.component.html',
  styleUrls: ['./inventory-purchase-modal.component.scss'],
})
export class InventoryPurchaseModalComponent implements OnInit {
  @Input() item: MenuItem;
  public supply = new Ingredients();

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

  updateName(s)
  {
    this.supply.name = s;
  }

  updateQuantity(n)
  {
    this.supply.quantity = n;
  }

  updateUnits(s)
  {
    this.supply.units = s;
  }

  confirmAdd()
  {
    if (this.item.ingredients != null)
    {
      if (this.item.ingredients.length > 0) 
      this.supply.id = this.item.ingredients[this.item.ingredients.length - 1].id + 1;
      else this.supply.id = 0;
    }
    else this.item.ingredients = new Array();
    
    this.item.ingredients.push(this.supply);
    this.modalCtrl.dismiss();
  }

  closeModal()
  {
    this.modalCtrl.dismiss();
  }
}
