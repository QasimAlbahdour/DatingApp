import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../_models/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;		// a
  constructor(private http: HttpClient) { }	// c

  getUsers(): Observable<User[]> {	// d starts
    return this.http.get<User[]>(this.baseUrl + 'users');
  }					// d ends

  getUser(id): Observable<User> {	// e starts
    return this.http.get<User>(this.baseUrl + 'users/' + id);
  }					// e ends

  updateUser(id: number, user: User) {
      return this.http.put(this.baseUrl + 'users/' + id, user);
  }

}
