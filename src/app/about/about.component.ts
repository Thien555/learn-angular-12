import { Component } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public isLogin = 0;
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

}

