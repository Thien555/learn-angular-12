import { Component } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {

  name = ''
  constructor(private commonS: CommonService) {

  }
  ngOnInit() {

  }

  public submitForm() {
    console.log('name', this.name)

    this.commonS.submitData(this.name)
  }

}
