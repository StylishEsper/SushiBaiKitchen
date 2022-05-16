import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-output',
  templateUrl: './card-output.component.html',
  styleUrls: ['./card-output.component.scss'],
})
export class CardOutputComponent implements OnInit {

  @Input() title;
  @Input() desc;

  constructor() { }

  ngOnInit() {
    this.desc=Math.random()
  }
}
