import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() name: string = ''
  @Output() conGoi: EventEmitter<any> = new EventEmitter()

  callParent() {
    console.log('call cha')
    this.conGoi.emit(this.name)
  }



}
