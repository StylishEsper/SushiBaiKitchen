import { convertPropertyBindingBuiltins } from '@angular/compiler/src/compiler_util/expression_converter';
import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menuItem';

@Injectable({
  providedIn: 'root'
})
export class OrderedItemsService {

  private orderedItems: MenuItem[] = new Array();
  private orderedItemsQuantity: number[] = new Array();

  constructor() { }

  addMenuItem(item: MenuItem, quantity: number){
    //check if the item already exists in the orderedItems list
    if(this.alreadyOrdered(item)){
      //update the quantity of the item
      this.orderedItemsQuantity[this.orderedItems.indexOf(item)] = quantity;
    }else{
      //add the item to the ordered list
      console.log(item);
      this.orderedItems.push(item);
      this.orderedItemsQuantity.push(quantity);
    }

    console.log(this.orderedItems)
  }

  removeMenuItem(item: MenuItem){
    var index = 0;
    this.orderedItems.forEach(menuItem => {
      if(menuItem.id==item.id){
        //remove the item
        this.orderedItems.splice(index, 1);
        this.orderedItemsQuantity.splice(index, 1);
      }
      index+=1;
    });
  }

  removeAll(){
    this.orderedItems.length=0;
    this.orderedItemsQuantity.length=0;
  }


  //check to see if the item is already in the orderedItems array. returns true or false
  alreadyOrdered(item: MenuItem): boolean{
    var hasItem = false;
    this.orderedItems.forEach(menuItem => {
      if(menuItem.id==item.id){
        hasItem = true;
      }
    });
    console.log("Has Item: " + hasItem)
    return hasItem;
  }

  getAllItems(): MenuItem[]{
    return this.orderedItems;
  }
  getAllItemQuantity(): number[]{
    return this.orderedItemsQuantity;
  }

  getItemQuantity(index:number): number{
    return this.orderedItemsQuantity[index];
  }
}
