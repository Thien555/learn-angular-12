import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {

  // public profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });

  public profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],

  });
  constructor(private common: CommonService, private fb: FormBuilder) {

  }

  ngOnInit(): void {
  }

  public onSubmit() {

    console.log('data', this.profileForm.value)

  }


}
