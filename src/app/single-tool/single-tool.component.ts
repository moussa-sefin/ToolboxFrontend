import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-tool',
  templateUrl: './single-tool.component.html',
  styleUrls: ['./single-tool.component.css']
})
export class SingleToolComponent implements OnInit {

  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(index=>{
      console.log(index.get("id"))
      console.log(index.get("title"))
    })
  }
}
