
import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "img[appApphideMissingH]",
})
export class ApphideMissingHDirective {
  constructor(private el: ElementRef) {}

  @HostListener("error")
  private onError() {
    this.el.nativeElement.src = "\\assets\\Img\\NoImageHorizontal.png";
  }
}