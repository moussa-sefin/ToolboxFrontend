import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { FormControl, FormGroup } from '@angular/forms';


interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ToolboxFrontend';
  v!:string

  cities: City[] | undefined;
  selectedCity: City | undefined;
 

  constructor(private primengConfig: PrimeNGConfig){}
  ngOnInit(): void {
    // this.primengConfig.ripple = true;



   this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];

  }






}




