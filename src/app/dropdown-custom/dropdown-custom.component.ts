import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-custom',
  templateUrl: './dropdown-custom.component.html',
  styleUrls: ['./dropdown-custom.component.scss']
})
export class DropdownCustomComponent {

  public listTinhOfTP(number: number) {
    const arr: string[] = [];

    for (let i = number; i < number + 5; i++) {
      arr.push(`thanh pho ${i}`)
    }

    return arr;
  }
  public districtsSelected: string[] = []

  public cities = [{ city: "Tinh 1+5", ditrict: this.listTinhOfTP(1) }, { city: "Tinh 2+5", ditrict: this.listTinhOfTP(6) }, { city: "Tinh 3+5", ditrict: this.listTinhOfTP(11) }, { city: "Tinh 4+5", ditrict: this.listTinhOfTP(16) }]

  public ngOnInit() {

    console.log('cities', this.cities)
  }

  public onChangeCities(e: any): void {
    if (!e.target.value) return
    const districtSelected = this.cities.find(item => item.city === e.target.value)?.ditrict
    if (districtSelected) {
      this.districtsSelected = districtSelected
    }

  }

}
