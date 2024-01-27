import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  getUser(email: string){
    return this.http.post('http://localhost:3000/user/getUserByEmail', email);
  }
}
