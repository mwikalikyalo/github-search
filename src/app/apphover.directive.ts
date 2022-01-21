import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appApphover]'
})
export class ApphoverDirective {

  constructor(private elem:ElementRef) { }

  @HostListener("mouseover") onMouseOver(){
    this.backgroundColor("rgb(29, 61, 98)")
    this.elem.nativeElement.style.color ="white"
  }
  @HostListener("mouseleave") onMouseLeave(){
    this.backgroundColor("white")
    this.elem.nativeElement.style.color = "black"
  }
  private backgroundColor(action:string){
    this.elem.nativeElement.style.backgroundColor = action;
  }
}
