import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers() {
    this.httpClient.get<any>('http://localhost:5000/api/' + 'users/getAllUsers').toPromise().then(response => response);
  }
}
