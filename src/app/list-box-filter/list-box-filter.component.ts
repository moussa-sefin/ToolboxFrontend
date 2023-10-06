import { Component, OnInit } from '@angular/core';

interface City {
  name: string,
  code: string
}


@Component({
  selector: 'app-list-box-filter',
  templateUrl: './list-box-filter.component.html',
  styleUrls: ['./list-box-filter.component.css']
})
export class ListBoxFilterComponent implements OnInit{


  cities!: City[];

    // selectedCity!: City;

    selectedCities!: City[];
    
    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }

}
