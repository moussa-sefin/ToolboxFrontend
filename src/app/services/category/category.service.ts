import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = 'http://127.0.0.1:8000/api'; // Replace with your Django API URL
  private tokenKey: string = "jwtToken"


  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories/`);
  }



  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


}
