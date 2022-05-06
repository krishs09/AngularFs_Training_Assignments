import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective2]'
})
export class CustomDirective2Directive implements OnChanges {

  @Input()
  appCustomDirective2: string="";

   allowedAdminUsers:string[]=[ "Scott", "Smith", "Robert", "Mark"];

  constructor(private _viewContainer : ViewContainerRef,
    private _templateRef:TemplateRef<any>)
   { }

  ngOnChanges() {

    // if(this.appCustomDirective2 == true)
    // {
    //   this._viewContainer.createEmbeddedView(this._templateRef);
    // }
    // else
    // {
    //   this._viewContainer.clear();
    // }
    // Allowed Admin
   
      if( this.appCustomDirective2 == "'Sam'"){
        this._viewContainer.clear();
      }else{
        this._viewContainer.createEmbeddedView(this._templateRef);
      }
 
  }

}
