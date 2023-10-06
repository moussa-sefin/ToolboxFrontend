import { Component, OnInit} from '@angular/core';


import { Tool } from '../interfaces/tool';
import { ToolService } from '../services/tool/tool.service';
import { HttpRequest } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { Category } from '../interfaces/category';
import { Tag } from '../interfaces/tag';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';
import { TagService } from '../services/tag/tag.service';
import { CategoryService } from '../services/category/category.service';




@Component({
  selector: 'app-table-tools',
  templateUrl: './table-tools.component.html',
  styleUrls: ['./table-tools.component.css']
})
export class TableToolsComponent implements OnInit{


  tools!: Tool[];
  tags!: Tag[];
  categories!:Category[]
  currentUser! :any;

  // constructor(
  //   private toolService: ToolService,
  //   private messageService: MessageService,
  //   private apiService: ApiService
  //   ) {}

  // ngOnInit() {
    
  //   this.toolService.getTools(1,4).subscribe((tool) => (this.tools = tool));
  //   this.currentUser = this.apiService.getCurrentUser()
  //   console.log(this.currentUser)
    
  // }



  clonedTools: { [s: string]: Tool } = {};

  constructor(private tagService:TagService, private categoryService: CategoryService, private toolService: ToolService,private apiService: ApiService, private messageService: MessageService) {}
  
  ngOnInit() {
    this.toolService.getTools(1,4).subscribe((tool) => (this.tools = tool));
  
    this.tagService.getTags().subscribe((tag)=>{this.tags=tag})
    this.categoryService.getCategories().subscribe((category)=>{this.categories=category})
    this.currentUser = this.apiService.getCurrentUser()
    console.log(this.currentUser)
  
  }
  
  onRowEditInit(tool: Tool) {
      this.clonedTools[(tool.id as unknown) as string] = { ...tool };
  }
  
  onRowEditSave(tool: Tool) {
      if (this.isToolExist(tool.toolName)) {
          delete this.clonedTools[(tool.id as unknown) as string];
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Tool is updated' });
      } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Tool Name Exist' });
      }
  }

  isToolExist(toolName: string): boolean {
    // Assuming 'tools' is an array of Tool objects
    // Iterate through the array to check if the toolName exists
    for (const tool of this.tools) {
      if (tool.toolName === toolName) {
        // If a tool with the same name is found, return true
        return true;
      }
    }
    // If the loop completes without finding a matching tool, return false
    return false;
  }
  
  
  onRowEditCancel(tool: Tool, index: number) {
      this.tools[index] = this.clonedTools[(tool.id as unknown) as string];
      delete this.clonedTools[(tool.id as unknown) as string];
  }
  



















}





  






