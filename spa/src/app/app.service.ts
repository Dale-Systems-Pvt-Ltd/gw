import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
declare let alertify: any;
@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseUrl = environment.apiUrl; // 'http://localhost:5001/api1/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    if (token) {
      this.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }

  login(model: any): Observable<any> {
    return this.http.post(this.baseUrl + 'auth/login', model)
    .pipe(
      map((response: any) => {
        const data = response;
        if (data) {
          localStorage.setItem('token', data.token);
          this.decodedToken = this.jwtHelper.decodeToken(data.token);
          console.log(this.decodedToken);
          return true;
        }
        return false;
      })
    );
  }
  loggedIn(): boolean {

    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
  logOut() {
    localStorage.removeItem('token');
  }

  showConfirm(message: string, okCallback: () => any) {
    alertify.confirm(message, function(e) {
      if (e) {
        okCallback();
      } else {

      }
    });
  }

  showSuccess(message: string) {
    alertify.success(message);
  }

  showError(message: string) {
    alertify.console.error((message));
  }

  showWarning(message: string) {
    alertify.warning(message);
  }

  showMessage(message: string) {
    alertify.message(message);
  }
}
