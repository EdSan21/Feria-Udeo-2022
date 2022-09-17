
import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "img[appHideMissing]",
})
export class ImgMissingDirective {
  constructor(private el: ElementRef) {}

  @HostListener("error")
  private onError() {
    this.el.nativeElement.src = "\\assets\\Img\\NoImageVertical.jpg";
  }
}