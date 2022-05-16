import { Component, DebugElement, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HomePage } from 'src/app/home/home.page';
import { Ingredients, MenuItem } from 'src/app/models/menuItem';

@Component({
  selector: 'app-new-ingredient-modal',
  templateUrl: './new-ingredient-modal.component.html',
  styleUrls: ['./new-ingredient-modal.component.scss'],
})
export class NewIngredientModalComponent implements OnInit {
  @Input() item: MenuItem;
  public ingredient = new Ingredients();

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

  updateName(s)
  {
    this.ingredient.name = s;
  }

  updateQuantity(n)
  {
    this.ingredient.quantity = n;
  }

  updateUnits(s)
  {
    this.ingredient.units = s;
  }

  confirmAdd()
  {
    if (this.item.ingredients != null)
    {
      if (this.item.ingredients.length > 0) 
      this.ingredient.id = this.item.ingredients[this.item.ingredients.length - 1].id + 1;
      else this.ingredient.id = 0;
    }
    else this.item.ingredients = new Array();
    
    this.item.ingredients.push(this.ingredient);
    this.modalCtrl.dismiss();
  }

  closeModal()
  {
    this.modalCtrl.dismiss();
  }
}
