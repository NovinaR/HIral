import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url:string;
  constructor(private http:HttpClient) {
    this.url="http://localhost:8091/"
   }

   public registerr(register:Register){
     return this.http.post<Register>(this.url+"register",register);
   }
   btnClick= function () {
      this.router.navigateByUrl('/register');
   };
}
