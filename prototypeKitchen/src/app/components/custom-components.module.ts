import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';//allows for *ngFor in components
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { CardOutputComponent } from './card-output/card-output.component';
import { SimpleMenuItemComponent } from './modals/simple-menu-item/simple-menu-item.component';
import { IncomingOrderComponent } from './incoming-orders/incoming-order.component';




@NgModule({
    declarations: [
      CardOutputComponent,
      SimpleMenuItemComponent,
      IncomingOrderComponent
    ],
    imports: [IonicModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule],
    exports: [
      CardOutputComponent,
      SimpleMenuItemComponent,
      IncomingOrderComponent
    ],
    entryComponents: [],
})

export class CustomComponentsModule{}