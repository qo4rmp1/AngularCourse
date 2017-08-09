import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlockComponent } from '../block/block.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  type = '';
  public action1: string = '';
  public action2: string = '';

  @ViewChild(BlockComponent)
  block: BlockComponent;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  //當上一個路由和下一個路由相同時，並不會重新載入Component
  //這時，若參數有改變，使用snapshot就不會被觸發
  //改成Observable的寫法才會被觸發
  ngOnInit() {
    // this.type = this.route.snapshot.params['type'];
    this.route.params.subscribe(params => {
      this.type = params['type'],
      this.action1 = params['num']  //matrix URL
    });

    this.route.queryParams.subscribe(params => {
      this.action2 = params['num']  //QueryString
    })
    console.log(`cards元件 執行ngOnInit`);
  }




  //使用元件型指令，一定要寫在這邊
  //了解執行順序
  //上一個步驟bugfix:修正ngAfterContentInit
  ngAfterContentInit() {
    console.log(`cards元件 執行ngAfterContentInit:cards元件 修改 block元件的title`);
    this.block.title = '123';
  }

  ngAfterViewInit() {
    console.log(`cards元件 執行ngAfterViewInit`);
  }
}
