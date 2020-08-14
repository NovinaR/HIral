import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private register:Register;
  constructor(private service:RegisterService,private router : Router) { 
    this.register=new Register();
  }

  registerr(){
    this.service.registerr(this.register).subscribe(res=>this.gotoRegister())
  }

  gotoRegister(){
    this.register=new Register;
  }
  ngOnInit() {
  }

}
