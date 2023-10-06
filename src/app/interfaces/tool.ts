import { Category } from "./category";
import { Tag } from "./tag";
import { User } from "./user";

export interface Tool {
  id: number;
  toolName: string;
  description: string;
  selectedCategories: Category[]; // Assuming Category is another model/interface
  selectedTags: Tag[]; // Assuming Tag is another model/interface
  downloadLink: string;
  profilePic: string; // Assuming the image field is a string containing the image URL
  license: string;
  toolOwner: string ; // Assuming User is another model/interface
  posted_at: Date; 
  avg_ratings:number;
  
}


export interface Tool2 {
 
  name: string;
  description: string;
  categories:Array<number>; 
  tags: Array<number>; 
  download_link: string;
  owner:number;
  image: File|null; 
  license: string;

}
