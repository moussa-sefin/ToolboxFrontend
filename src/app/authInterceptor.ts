import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './services/api.service';
import { ToolService } from './services/tool/tool.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private apiService: ApiService, private toolService: ToolService){}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Add authentication token to the request headers if the user is authenticated
    const token = this.toolService.getToken();
    if (token) {
      req = req.clone({
        setHeaders: {
        
          Authorization: `Bearer ${token}`,
        },
      });

      
    }
   
    return next.handle(req);
  }
}
