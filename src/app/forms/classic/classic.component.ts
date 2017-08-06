import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {

  data: any = {
    'title': 'Hello',
    'subtitle': 'World',
    'address': ['Taipei','Taichung','Kaoshuang']
  };
  
  // 專門給 ngFor 用的陣列屬性
  get data_address_len() {
    return new Array(this.data.address.length);
  }
  
  constructor() { }

  ngOnInit() {
  }

  setDisable(ctrl: NgModel) {
    debugger
    ctrl.control.disable();
  }

  doSubmit($event, f) {
    console.log($event);
    console.log(f);
  }

  addAddress() {
    this.data.address.push('');
  }
}
