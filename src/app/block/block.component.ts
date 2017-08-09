import { Component, OnInit, ViewChild, ElementRef, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  @ViewChild('titleElement')
  titleElement: ElementRef;

  title= 'Sky red';
  constructor() {
    console.log(`block元件 執行constructor`);
  }

  ngOnChanges(changes: SimpleChanges) {
   console.log(`block元件 執行ngOnChanges`);
  }

  ngOnInit() {
   console.log(`block元件 執行ngOnInit`);
  }
  //了解執行順序
  ngAfterContentInit() {
    console.log(`block元件 執行ngAfterContentInit`);
  }
  ngAfterViewInit() {
    console.log(`block元件 執行ngAfterViewInit:顯示block元件的title = ${this.titleElement.nativeElement.innerHTML}`);
  }
}
