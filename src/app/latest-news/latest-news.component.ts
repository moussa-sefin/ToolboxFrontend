import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


interface ToolResponse  {
   // Adjust the property types according to your data structure
  id:number;
  name: string;
  description:string;
  download_link:string;
  image:string;
  license:string;
  categories:Array<string>;
  tags:Array<string>;
  owner_name:string;
  avg_ratings:number;
}

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {

  data: ToolResponse [] =[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getTools().subscribe((response) => {
      this.data = [...response];
      console.log(this.data[3].name)
      
      
    });
    
  }

  
}
