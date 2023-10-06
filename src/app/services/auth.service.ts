import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private jwtHelper: JwtHelperService, private myToken: ApiService) {}

  isAuthenticated(): boolean {
    const token = this.myToken.getToken();

    // Check if the token is valid (not expired)
    return !this.jwtHelper.isTokenExpired(token);
  }
}

