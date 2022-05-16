import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, DebugElement, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HomePage } from 'src/app/home/home.page';
import { Ingredients, MenuItem, Promotion } from 'src/app/models/menuItem';

@Component({
  selector: 'app-new-promotion-modal',
  templateUrl: './new-promotion-modal.component.html',
  styleUrls: ['./new-promotion-modal.component.scss'],
})
export class NewPromotionModalComponent implements OnInit {
  @Input() item: MenuItem;
  public promotion = new Promotion();

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

  updateDescription(s)
  {
    this.promotion.description = s;
  }

  updateRequirements(s)
  {
    this.promotion.requirements = s;
  }

  updateDealType(s)
  {
    this.promotion.dealType = s;
  }

  updateDiscountAmount(n)
  {
    this.promotion.discountAmount = n;
  }

  updateItemsApplicable(n)
  {
    this.promotion.itemsApplicable = n;
  }

  updateLimitations(s)
  {
    this.promotion.limitations = s;
  }

  confirmAdd()
  {
    if (this.item.promotions != null)
    {
      if (this.item.promotions.length > 0) 
      this.promotion.id = this.item.promotions[this.item.promotions.length - 1].id + 1;
      else this.promotion.id = 0;
    }
    else this.item.promotions = new Array();
    
    this.promotion.enabled = false;
    this.item.promotions.push(this.promotion);
    this.modalCtrl.dismiss();
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }
}
