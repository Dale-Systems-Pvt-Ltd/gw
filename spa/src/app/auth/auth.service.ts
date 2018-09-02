import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl;
  constructor(private appService: AppService,
    private http: HttpClient) { }

  register(model: any): Observable<any> {
    return this.http.post(this.baseUrl + 'auth/register', model)
    .pipe(
      map((response: any) => {
        const data = response;
        if (data) {
          localStorage.setItem('token', data.token);
          return true;
        }
        return false;
      })
    );
  }
}
