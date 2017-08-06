import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from "@angular/forms";

@Component({
  selector: 'app-classic2',
  templateUrl: './classic2.component.html',
  styleUrls: ['./classic2.component.css']
})
export class Classic2Component implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
    title: ['Hello', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    group1: this.fb.group({ subtitle: ['World', [Validators.required]] }),
    address: this.fb.array([ this.fb.control('Taipei'),this.fb.control('Taichung'),this.fb.control('Kaoshuang') ])
    })
  }

  setDisable(ctrl: FormControl) {
    debugger
    ctrl.disable();
  }

  submit() {
    console.log(this.form);
  }

  addAddress() {
    let addresses = this.form.get('address') as FormArray;
    addresses.push(this.fb.control('', [Validators.required]));
  }
}
