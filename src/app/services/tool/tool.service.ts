import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tool, Tool2 } from 'src/app/interfaces/tool';


 interface ToolResponce{
  field_errors:any

 }

@Injectable({
  providedIn: 'root'
})
export class ToolService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // Replace with your Django API URL
  private tokenKey: string = "jwtToken"


  constructor(private http: HttpClient) {}

  getTools(page: number = 1, pageSize: number = 10): Observable<Tool[]> {
    // Construct the query parameters
    const params = new HttpParams()
      .set('page', page.toString()) // Specify the page number
      .set('page_size', pageSize.toString()); // Specify the page size
  
    // Add any other query parameters as needed
  
    return this.http.get<Tool[]>(`${this.apiUrl}/tools/average-ratings-all/`, { params });
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey)
  }

 



  getTool(id: number): Observable<Tool> {
    return this.http.get<Tool>(`${this.apiUrl}/${id}`);
  }

  createTool(tool:any): Observable<any> {
    console.log(tool)
    return this.http.post<ToolResponce>(`${this.apiUrl}/tools/create/`,tool);
  }

  updateTool(id: number, tool: Tool): Observable<any> {
    return this.http.put<ToolResponce>(`${this.apiUrl}/${id}`, tool);
  }

  deleteTool(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
