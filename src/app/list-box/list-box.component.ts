import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.css']
})
export class ListBoxComponent implements OnInit {

  constructor(){}

  cities!: City[];

    formGroup!: FormGroup;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];

        this.formGroup = new FormGroup({
            selectedCity: new FormControl<City | null>(null)
        });
    } 
   

}
