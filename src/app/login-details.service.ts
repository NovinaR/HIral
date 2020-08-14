import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginDetailsService {

  readonly rootUrl = 'http://localhost:8091';

  constructor(private http: HttpClient) { }

  loginUser(username: string, password: string) {
    var body = {
      username: username,
      password: password
    }
    return this.http.post(this.rootUrl + '/login', body);
  }
}
