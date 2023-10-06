import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/interfaces/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private apiUrl = 'http://127.0.0.1:8000/api'; // Replace with your Django API URL
  private tokenKey: string = "jwtToken"


  constructor(private http: HttpClient) {}

  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${this.apiUrl}/tags/`);
  }



  deleteTags(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


}
