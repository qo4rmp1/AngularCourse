import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appPluseone]'
})
export class PluseoneDirective {

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    this.html = this.el.nativeElement.innerHTML;
    console.dir(this.el.nativeElement);
  }

  /*
  @HostListener:綁定事件
  @HostBinding:綁定Html Attribute
  */
  //(click)="addCounter()"
  @HostListener('click', [''])
  addCounter() {
    let counter = +this.html;
    counter++;
    this.html = counter.toString();
  }

  @HostBinding('innerHTML')
  html: string = '';

}
