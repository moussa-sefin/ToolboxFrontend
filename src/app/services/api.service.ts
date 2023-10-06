import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tool2 } from '../interfaces/tool';

interface TokenResponse {
  access: string;
  user_id:any;
}
interface RegisterResponse{
  message:string;
  error:any;
}
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // Replace with your Django API URL
  private tokenKey: string = "jwtToken"
  private userIdKey:string = "currentUserId"
  private userName:string = "currentUser"















  constructor(private http: HttpClient) { }

  // Method to send a GET request for all Tools
  getTools(): Observable<any> {
    const url = `${this.apiUrl}/tools/average-ratings-all/`; 

    return this.http.get(url);
  }


 




getUserId(): number | null {
  const userId = localStorage.getItem(this.userIdKey);
  return userId ? +userId : null;
}

setUserId(userId: number): void {
  localStorage.setItem(this.userIdKey, userId.toString());
}

  // Get the JWT token from local storage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey)
  }
  // Store the JWT token in local storage
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token)
  }
  // Include the token in the request headers
  getHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  getCurrentUser(){
    return localStorage.getItem(this.userName)
  }

  setCurrentUser(userName:string){

    localStorage.setItem(this.userName,userName)
  }

  loginUser(loginData: object) {
    const url = `${this.apiUrl}/token/`;
    return this.http.post<TokenResponse>(url, loginData);

  }

  registerUser(userRegisterDatata: object) {
    const url = `${this.apiUrl}/register/`;
    return this.http.post<RegisterResponse>(url,userRegisterDatata);


  }



}
