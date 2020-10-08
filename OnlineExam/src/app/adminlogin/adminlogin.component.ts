import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  admin = new Admin();
  msg = "";
  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit() {

  }

  loginAdmin(){
    this._service.loginAdminFromRemote(this.admin).subscribe(
      data => {
        console.log("response recieved");
        this._router.navigate(['/adminhome']);
      },
      error => {
        console.log("exception occured");
        this.msg = "Bad credentials, please enter valid email and password";
      }
    )
  }
  }


