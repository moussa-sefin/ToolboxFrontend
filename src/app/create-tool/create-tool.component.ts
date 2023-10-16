import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../services/category/category.service';
import { TagService } from '../services/tag/tag.service';
import { Category } from '../interfaces/category';
import { Tag } from '../interfaces/tag';
import { ToolService } from '../services/tool/tool.service';
import { Tool, Tool2 } from '../interfaces/tool';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-create-tool',
  templateUrl: './create-tool.component.html',
  styleUrls: ['./create-tool.component.css'],
})
export class CreateToolComponent implements OnInit {
  categories!: Category[];
  
  tags!: Tag[];
  toolCreateForm!: FormGroup;
  selectedFile: File | null = null; // Use standard JavaScript File

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private categoryServise: CategoryService,
    private tagService: TagService,
    private toolService: ToolService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.categoryServise.getCategories().subscribe((value) => {
      this.categories = value;
    });
    this.tagService.getTags().subscribe((value) => {
      this.tags = value;
    });

    this.toolCreateForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(1)
        ]
      ],
      license: [
        '',
        [
          Validators.required,
          Validators.minLength(1)
        ]
      ],
      download_link: [
        '',
        [
          Validators.required,
          Validators.pattern('https?://.+')
        ]
      ],
      categories: [],
      tags: [],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],
      image: [null]
    });
  }

  onSubmitTool() {
    // Extract category and tag IDs

  
    // Create a new FormData object

    console.log(this.toolCreateForm.value)
   
    const formData = new FormData();
  
    // Append other fields
    formData.append('name', this.toolCreateForm.value.name);
    formData.append('license', this.toolCreateForm.value.license);
    formData.append('download_link', this.toolCreateForm.value.download_link);
    formData.append('description', this.toolCreateForm.value.description);
  
    // Append category and tag IDs as arrays
    formData.append('categories', this.toolCreateForm.value.categories);
    formData.append('tags', this.toolCreateForm.value.tags);
  
    // Append the file if selected
    if (this.selectedFile) {
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }
  
    // Get the user's ID from the token payload
    const userId = this.apiService.getUserId();
  
    // Append the owner field with the user's ID
    // formData.append('owner', userId!.toString());

    let data = {
      "name": this.toolCreateForm.value.name,
      "license": this.toolCreateForm.value.license,
      "download_link": this.toolCreateForm.value.download_link,
      "description": this.toolCreateForm.value.description,
      "categories": this.toolCreateForm.value.categories,  
      "tags": this.toolCreateForm.value.tags, 
      "owner":userId,       
      // "image": null

      
  }
  
  
    
  this.toolService.createTool(data).subscribe(
    (response) => {
      // Handle the success response here, e.g., show a success message
      console.log('Tool created successfully', response);

      // Show a success message to the user
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Tool created successfully',
      });
    },
    (error) => {
      // Handle the error response here, e.g., show an error message
      console.error('Error creating tool:', error);

      // Display field errors in the console
      if (error.field_errors) {
        console.error('Field Errors:', error.field_errors);
      }

      // Show an error message to the user
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Error creating tool',
      });
    }
  );
  }
  
  

  onFileSelected(event: any) {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files;

    if (files && files.length > 0) {
        // Append the first selected file to the FormData object
        this.selectedFile = files[0];
     
    }
}

  onCategorySelectionChange(event: any) {
    // Update the 'categories' form control with the selected categories
    
    console.log("categoris "+event.value)
  }

  onTagSelectionChange(event: any) {
   
    console.log("tags "+event.value)
  }
}
