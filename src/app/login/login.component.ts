import { Component, OnInit } from '@angular/core';
import { LoginDetailsService } from '../login-details.service';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  constructor(private loginService:LoginDetailsService,private router : Router) { }

  onSubmit(){
    this.loginService.loginUser(this.username,this.password).subscribe(
      res=>{
        this.router.navigate(['/register'])
      }
    );
  }

  ngOnInit() {
  }


   
}
