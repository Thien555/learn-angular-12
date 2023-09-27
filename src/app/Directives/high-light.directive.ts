import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  @Input('appHighLight') appHighLight = 'red';

  constructor(private element: ElementRef) {



  }

  ngOnInit() {
    console.log('color', this.appHighLight)

    if (!this.appHighLight) {
      this.element.nativeElement.style.color = 'red';
      return
    }
    this.element.nativeElement.style.color = this.appHighLight;

  }

}
