import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  @ViewChild('titleElement')
  titleElement: ElementRef;

  title= 'Sky red';
  constructor() { }

  ngOnInit() {
  }

}
