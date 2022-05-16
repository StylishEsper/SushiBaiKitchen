import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuItem } from 'src/app/models/menuItem';
import { MenuItemsService } from 'src/app/services/menu-items.service';
import { OrderedItemsService } from 'src/app/services/ordered-items.service';
import { OrderItemModalComponent } from '../../components/modals/order-item-modal/order-item-modal.component';
import { ViewOrderModalComponent } from '../../components/modals/view-order-modal/view-order-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  public viewingCategory = "about";
  public img = "assets/images/sushibaiapparently.jpg";

  public recommendedItems: MenuItem[] = new Array();
  public popularItems: MenuItem[] = new Array();

  public search: string = "";

  constructor(public menuService: MenuItemsService, public modalController: ModalController, 
    public orderService: OrderedItemsService, private router: Router) { }

  ngOnInit() 
  {
    if (sessionStorage.getItem("loggedIn") == null) 
    {
      this.router.navigateByUrl('/login');
      return;
    }

    this.resetFilters();
  }

  resetFilters()
  {
    this.recommendedItems = [];
    this.popularItems = [];
    this.menuService.getAllItems().forEach(menuItem => {
      if(menuItem.popular){
        this.recommendedItems.push(menuItem)
      }
      if(menuItem.recommended){
        this.popularItems.push(menuItem)
      }
    });  
  }

  signOut()
  {
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }

  onSearchChange(event)
  {
    this.search=event;
  }

  filtered(item: MenuItem): boolean{
    if(item.name.toLowerCase().includes(this.search.toLowerCase())
    ||item.englishName.toLowerCase().includes(this.search.toLowerCase())){
      //console.log(item.name.toLowerCase() + " - " + this.search.toLowerCase())
      //console.log(item.englishName.toLowerCase() + " - " + this.search.toLowerCase())
      return true;
    }else{
      return false;
    }
  }

  async OrderItemModal(menuItem: MenuItem){
    const modal = await this.modalController.create({
      component: OrderItemModalComponent,
      cssClass: 'OrderItemModal',
      componentProps: {
        menuItem: menuItem
      }
    });
    return await modal.present();
  }

  async viewOrder(){
    const modal = await this.modalController.create({
      component: ViewOrderModalComponent,
      cssClass: 'OrderItemModal'
    });
    return await modal.present();
  }

}
