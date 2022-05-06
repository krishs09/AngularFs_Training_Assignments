  import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomDirective1]'
})
export class CustomDirective1Directive implements OnInit {

  @Input()
  appCustomDirective1 :string="";
  constructor(private _element:ElementRef) { }

  ngOnInit(): void {
    if(this.appCustomDirective1 == ""){
      this._element.nativeElement.style.background="Gray";
    }else{
      this._element.nativeElement.style.background=this.appCustomDirective1;
    }
  
  }

}
