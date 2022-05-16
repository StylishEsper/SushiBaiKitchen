import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menuItem';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {

  private allMenuItems: MenuItem[] = [
    {
      id: 0,
      name:"Ikura Gunkan",
      englishName: "Salmon Roe",
      image:"assets/images/Menu_Ikura_Gunkan.png",
      price: 8.99,
      quantity: 6,
      calories: 1000,
      popular: true,
      recommended: false,
    },
    {
      id: 1,
      name:"Sake Nigiri",
      englishName: "Salmon",
      image:"assets/images/Menu_Sake_Nigiri.png",
      price: 6.99,
      quantity: 6,
      calories: 1000,
      popular: true,
      recommended: true,
    },
    {
      id: 2,
      name:"Kappa Maki",
      englishName: "Cucumber",
      image:"assets/images/Menu_Kappa_Maki.png",
      price: 6.99,
      quantity: 6,
      calories: 1000,
      popular: false,
      recommended: false,
    },
    {
      id: 3,
      name:"Maguro Nigiri",
      englishName: "Lean cut of Tuna",
      image:"assets/images/Menu_Maguro_Nigiri.png",
      price: 5.99,
      quantity: 6,
      calories: 1000,
      popular: false,
      recommended: false,
    },
    {
      id: 4,
      name:"Uni",
      englishName: "Sea Urchin",
      image:"assets/images/Menu_Uni.png",
      price: 5.99,
      quantity: 6,
      calories: 1000,
      popular: false,
      recommended: false,
    },
    {
      id: 5,
      name:"Toro",
      englishName: "Tuna belly",
      image:"assets/images/Menu_Toro.png",
      price: 5.99,
      quantity: 6,
      calories: 1000,
      popular: true,
      recommended: true,
    },
    {
      id: 6,
      name:"Hamachi",
      englishName: "Young Yellowtail",
      image:"assets/images/Menu_Hamachi.png",
      price: 5.99,
      quantity: 8,
      calories: 1000,
      popular: false,
      recommended: false,
    },
    {
      id: 7,
      name:"Ebi Nigiri",
      englishName: "Cooked Shrimp",
      image:"assets/images/Menu_Ebi_Nigiri.png",
      price: 5.99,
      quantity: 6,
      calories: 1000,
      popular: false,
      recommended: false,
    },
    {
      id: 8,
      name:"Tamagoyaki",
      englishName: "Fried Egg",
      image:"assets/images/Menu_Tamagoyaki.png",
      price: 5.99,
      quantity: 6,
      calories: 1000,
      popular: false,
      recommended: false,
    }
  ]

  constructor() { }

  getAllItems(): MenuItem[]{
    return this.allMenuItems;
  }
}
