import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-menu-item',
  templateUrl: './simple-menu-item.component.html',
  styleUrls: ['./simple-menu-item.component.scss'],
})
export class SimpleMenuItemComponent implements OnInit {

  @Input() menuItem;

  constructor() { }

  ngOnInit() {}

}
