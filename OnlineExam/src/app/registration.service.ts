import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private _http : HttpClient) { }


  public loginUserFromRemote(user : User) : Observable<any> {
    return this._http.post<any>("http://localhost:8080/demo-test/rest/login", user);
  }

  public registerUserFromRemote(user : User) : Observable<any> {
    return this._http.post<any>("http://localhost:8080/demo-test/rest/register", user);
  }

  public loginAdminFromRemote(admin : Admin) : Observable<any> {
    return this._http.post<any>("http://localhost:8080/demo-test/rest/adminlogin", admin);
  }
}
