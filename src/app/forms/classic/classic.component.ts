import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {

  data: any = { 'title': 'Hello', 'subtitle': 'World'};
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
}
