import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-counter',
  templateUrl: './user-counter.component.html',
  styleUrls: ['./user-counter.component.css']
})
export class UserCounterComponent implements OnInit {
  formGroup!: FormGroup;
  value=10
constructor(){}
  ngOnInit() {
      this.formGroup = new FormGroup({
          value: new FormControl(10)
      });
  }
}
