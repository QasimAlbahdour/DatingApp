import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

const httpOptions = {	
  headers: new HttpHeaders({		// b starts
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
};					// b ends

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;		//a
  constructor(private http: HttpClient) { }	//c

  getUsers(): Observable<User[]> {	// d starts
    return this.http.get<User[]>(this.baseUrl + 'users', httpOptions);
  }					// d ends

  getUser(id): Observable<User> {	// e starts
    return this.http.get<User>(this.baseUrl + 'users/' + id, httpOptions);
  }					// e ends

}
