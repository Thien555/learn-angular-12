import { Component } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public name = 'Thien';
  public age = 18;
  public fruits = ['tao', 'nho'];
  public listFruits = [
    { id: 1, name: 'tao', price: 80 },
    { id: 1, name: 'tao', price: 80 },
    { id: 1, name: 'tao', price: 100 },
    { id: 1, name: 'tao', price: 100 },
    { id: 1, name: 'tao', price: 100 },
    { id: 1, name: 'tao', price: 100 }
  ];


  public count = 0;
  public counterBinhPhuong = 0;
  constructor(private common: CommonService) {

  }

  ngOnInit() {
    console.log('count', this.count)
    this.count = this.common.counter;

    console.log('count', this.counterBinhPhuong)

    this.counterBinhPhuong = this.common.binhPhuong(this.count)
    this.common.counter++
  }


  public resetName(): void {
    console.log('function resetName')
    this.name = ''
  }

}
