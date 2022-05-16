import { Component, DebugElement, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HomePage } from 'src/app/home/home.page';
import { Ingredients, MenuItem } from 'src/app/models/menuItem';

@Component({
  selector: 'app-new-item-modal',
  templateUrl: './new-item-modal.component.html',
  styleUrls: ['./new-item-modal.component.scss'],
})
export class NewItemModalComponent implements OnInit {
  @Input() homePage: HomePage;
  public newItem = new MenuItem();

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

  roundValue(value: number): number{
    return Math.round(value * 100) / 100;
  }

  updateJapaneseName(s)
  {
    this.newItem.name = s;
  }

  updateEnglishName(s)
  {
    this.newItem.englishName = s;
  }

  updateImage(s)
  {
    var i = s.lastIndexOf("\\");
    if (i >= 0) s = s.substring(i, s.length);
    this.newItem.image = "assets/images/" + s;
  }

  updatePrice(n)
  {
    this.newItem.price = n;
  }

  updateCalories(n)
  {
    this.newItem.calories = n;
  }

  updateQuantity(n)
  {
    this.newItem.quantity = n;
  }

  updateStatus(s)
  {
    this.newItem.status = s;
  }

  updatePrepTime(s)
  {
    this.newItem.prepTime = s;
  }

  updateRecipeDescription(s)
  {
    this.newItem.recipeDescription = s;
  }

  confirmItem()
  {
    if (this.homePage.allItems != null)
    {
      if (this.homePage.allItems.length > 0) 
      this.newItem.id = this.homePage.allItems[this.homePage.allItems.length - 1].id + 1;
      else this.newItem.id = 0;
    }
    else this.homePage.allItems = new Array();
    if (this.newItem.status == null) this.newItem.status = "Invisible";
    console.log(this.newItem.status);
    this.homePage.allItems.push(this.newItem);
    this.modalCtrl.dismiss();
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }
}
