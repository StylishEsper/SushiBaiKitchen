import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, DebugElement, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HomePage } from 'src/app/home/home.page';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-reject-confirmation-modal',
  templateUrl: './reject-confirmation-modal.component.html',
  styleUrls: ['./reject-confirmation-modal.component.scss'],
})
export class RejectConfirmationModalComponent implements OnInit {
  @Input() homePage: HomePage;
  public order = new Order();

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

  closeModal(){
    this.modalCtrl.dismiss();
  }
}
