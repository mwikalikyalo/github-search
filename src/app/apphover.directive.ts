import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appApphover]'
})
export class ApphoverDirective {

  constructor(private elem:ElementRef) { }

  @HostListener("mouseleave") onMouseLeave(){
    this.backgroundColor("#d8e2dc")
    this.elem.nativeElement.style.color = "black"
  }
  @HostListener("mouseover") onMouseOver(){
    this.backgroundColor("#ffd60a")
    this.elem.nativeElement.style.color ="grey"
  }
  private backgroundColor(action:string){
    this.elem.nativeElement.style.backgroundColor = action;
  }
}
