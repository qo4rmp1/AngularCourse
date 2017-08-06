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
    'address': []
  };

  addresses = [0,1,2]
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
    this.addresses.push(this.addresses.length);
  }
}
