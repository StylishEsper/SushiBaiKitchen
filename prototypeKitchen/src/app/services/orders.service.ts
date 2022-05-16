import { Injectable } from '@angular/core';
import { Order, OrderItems, Recipe, User } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

/*

          export class Order {
            orderID: number;
            userID: User[];
            orderItems: OrderItems[];
            orderDate: DateTime;
}
*/
orderAcceptedDate: string|null;
orderReadyDate: string|null;
orderFulfilledDate: string|null;

  private allOrders: Order[] = [
    {
      orderID: 1,
      user: {userID: 1, firstName: "Ada", lastName: "Lovelace", address: "22 Front Street", phone: 9054335865, email: "a.lovelace@gmail.com", password: "password", isActive: true},
      orderItems: OrderItems[1] = [{recipe: {recipeID: 4, recipeName: "Chiraishi", recipeEnglishName: "Mixed Salmon Bowl", recipeImage: "assets/images/Menu_Salmon_Chiraishi.png", recipeQuantity: 1, recipeDescription: "", recipePrice: 12.99, recipeIsAvailable: true, recipeIsPopular: true, recipeCalories: 1000}, orderQuantity: 1}],
      orderDate: "2021-11-30T19:20-05:00",
      orderNotes: "Could I get 2 sets of chopsticks?",
      orderAcceptedDate: "2021-11-30T19:21-05:00",
      orderReadyDate: null,
      orderFulfilledDate: null
    },
    { 
      orderID: 2,
      user: {userID: 2, firstName: "Grace", lastName: "Hopper", address: "11 Joe Shuster Way", phone: 6477787724, email: "G.Hops@gmail.com", password: "somepassword", isActive: true},
      orderItems: OrderItems[3] = [
        {recipe: {recipeID: 1, recipeName: "California Roll", recipeEnglishName: "California Roll", recipeImage: "assets/images/Menu_California_Roll.png", recipeQuantity: 12, recipeDescription: "", recipePrice: 7.99, recipeIsAvailable: true, recipeIsPopular: true, recipeCalories: 1000}, orderQuantity: 1},
        {recipe: {recipeID: 2, recipeName: "Croquettes", recipeEnglishName: "Croquettes", recipeImage: "assets/images/Menu_Croquettes.png", recipeQuantity: 4, recipeDescription: "", recipePrice: 4.99, recipeIsAvailable: true, recipeIsPopular: true, recipeCalories: 1000}, orderQuantity: 2},
        {recipe: {recipeID: 3, recipeName: "Miso", recipeEnglishName: "Miso", recipeImage: "assets/images/Menu_Miso_Soup.png", recipeQuantity: 1, recipeDescription: "", recipePrice: 2.99, recipeIsAvailable: true, recipeIsPopular: true, recipeCalories: 1000}, orderQuantity: 2}
      ],
      orderDate: "2021-11-30T19:21-05:00",
      orderNotes: "No wasabi, please!",
      orderAcceptedDate: "2021-11-30T19:22-05:00",
      orderReadyDate: null,
      orderFulfilledDate: null
    },
    {
      orderID: 3,
      user: {userID: 3, firstName: "Margaret", lastName: "Hamilton", address: "1032 Dufferin St.", phone: 2895458463, email: "MaHam@hotmail.com", password: "123321", isActive: true},
      orderItems: OrderItems[1] = [{recipe: {recipeID: 5, recipeName: "Ikura Gunkan Maki", recipeEnglishName: "Salmon Roe Uramaki", recipeImage: "assets/images/Menu_Ikura_Gunkan.png", recipeQuantity: 2, recipeDescription: "", recipePrice: 8.99, recipeIsAvailable: true, recipeIsPopular: true, recipeCalories: 1000}, orderQuantity: 1}],
      orderDate: "2021-11-30T19:21-05:00",
      orderNotes: "",
      orderAcceptedDate: "2021-11-30T19:22-05:00",
      orderReadyDate: null,
      orderFulfilledDate: null
    },
    {
      orderID: 4,
      user: {userID: 4, firstName: "Joan", lastName: "Clarke", address: "103 Gwynne Ave.", phone: 6476685864, email: "JoanDClarke@live.ca", password: "fj3ldgn4ol69fkws", isActive: true},
      orderItems: OrderItems[1] = [{recipe: {recipeID: 4, recipeName: "Chiraishi", recipeEnglishName: "Chiraishi", recipeImage: "assets/images/Menu_Salmon_Chiraishi.png", recipeQuantity: 1, recipeDescription: "", recipePrice: 12.99, recipeIsAvailable: true, recipeIsPopular: true, recipeCalories: 1000}, orderQuantity: 1}],
      orderDate: "2021-11-30T19:22-05:00",
      orderNotes: "I don't want any sesame...",
      orderAcceptedDate: "2021-11-30T19:22-05:00",
      orderReadyDate: null,
      orderFulfilledDate: null
    },
    {
      orderID: 5,
      user: {userID: 5, firstName: "Mihael", lastName: "Keehl", address: "100 Macdonelle Ave.", phone: 6473105436, email: "JM35d@yahoo.com", password: "password", isActive: true},
      orderItems: OrderItems[2] = [
        {recipe: {recipeID: 6, recipeName: "Tamagoyaki", recipeEnglishName: "Fried Egg", recipeImage: "/assets/images/Menu_Tamagoyaki.png", recipeQuantity: 1, recipeDescription: "", recipePrice: 5.99, recipeIsAvailable: true, recipeIsPopular: true, recipeCalories: 1000}, orderQuantity: 2},
        {recipe: {recipeID: 2, recipeName: "Croquettes", recipeEnglishName: "Croquettes", recipeImage: "assets/images/Menu_Croquettes.png", recipeQuantity: 4, recipeDescription: "", recipePrice: 4.99, recipeIsAvailable: true, recipeIsPopular: true, recipeCalories: 1000}, orderQuantity: 2}],
      orderDate: "2021-11-30T19:23-05:00",
      orderNotes: "",
      orderAcceptedDate: "2021-11-30T19:24-05:00",
      orderReadyDate: null,
      orderFulfilledDate: null
    },
    {
      orderID: 6,
      user: {userID: 6, firstName: "Nathan", lastName: "River", address: "34 Elm Grove Ave.", phone: 7782714563, email: "IamN@hotmail.com", password: "password", isActive: true},
      orderItems: OrderItems[2] = [
        {recipe: {recipeID: 7, recipeName: "Sake Nigiri", recipeEnglishName: "Salmon", recipeImage: "assets/images/Menu_Sake_Nigiri.png", recipeQuantity: 1, recipeDescription: "", recipePrice: 6.99, recipeIsAvailable: true, recipeIsPopular: true, recipeCalories: 1000}, orderQuantity: 2},
        {recipe: {recipeID: 2, recipeName: "Croquettes", recipeEnglishName: "Croquettes", recipeImage: "assets/images/Menu_Croquettes.png", recipeQuantity: 4, recipeDescription: "", recipePrice: 4.99, recipeIsAvailable: true, recipeIsPopular: true, recipeCalories: 1000}, orderQuantity: 1},
        {recipe: {recipeID: 3, recipeName: "Miso", recipeEnglishName: "Miso", recipeImage: "assets/images/Menu_Miso_Soup.png", recipeQuantity: 1, recipeDescription: "", recipePrice: 2.99, recipeIsAvailable: true, recipeIsPopular: true, recipeCalories: 1000}, orderQuantity: 2},
        {recipe: {recipeID: 8, recipeName: "Ebi Nigiri", recipeEnglishName: "Cooked Shrimp", recipeImage: "assets/images/Menu_Ebi_Nigiri.png", recipeQuantity: 2, recipeDescription: "", recipePrice: 6.99, recipeIsAvailable: true, recipeIsPopular: true, recipeCalories: 1000}, orderQuantity: 1},
      ],
      orderDate: "2021-11-30T19:24-05:00",
      orderNotes: "",
      orderAcceptedDate: "2021-11-30T19:24-05:00",
      orderReadyDate: null,
      orderFulfilledDate: null
    },
    {
      orderID: 7,
      user: {userID: 7, firstName: "Tim", lastName: "Schaffer", address: "124 King St. W.", phone: 6785048403, email: "Schaffer@doublefine.com", password: "123321", isActive: true},
      orderItems: OrderItems[1] = [
        {recipe: {recipeID: 8, recipeName: "Ebi Nigiri", recipeEnglishName: "Cooked Shrimp", recipeImage: "assets/images/Menu_Ebi_Nigiri.png", recipeQuantity: 2, recipeDescription: "", recipePrice: 6.99, recipeIsAvailable: true, recipeIsPopular: true, recipeCalories: 1000}, orderQuantity: 2}
      ],
      orderDate: "2021-11-30T19:25-05:00",
      orderNotes: "",
      orderAcceptedDate: null,
      orderReadyDate: null,
      orderFulfilledDate: null
    },
    {
      orderID: 8,
      user: {userID: 7, firstName: "Jugal", lastName: "Patel", address: "123 Example St.", phone: 2890485431, email: "jpatel@dcmail.ca", password: "123321", isActive: true},
      orderItems: OrderItems[1] = [
        {recipe: {recipeID: 6, recipeName: "Tamagoyaki", recipeEnglishName: "Fried Egg", recipeImage: "/assets/images/Menu_Tamagoyaki.png", recipeQuantity: 1, recipeDescription: "", recipePrice: 5.99, recipeIsAvailable: true, recipeIsPopular: true, recipeCalories: 1000}, orderQuantity: 2}
      ],
      orderDate: "2021-11-30T19:25-05:00",
      orderNotes: "",
      orderAcceptedDate: null,
      orderReadyDate: null,
      orderFulfilledDate: null
    }
  ]

  constructor() { }

  getAllOrders(): Order[]{
    return this.allOrders;
  }
}
