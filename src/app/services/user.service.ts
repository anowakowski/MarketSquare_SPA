import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Promise<any> {
    return this.httpClient.get<any>('https://localhost:5001/api/users/getAllUsers').toPromise().then(response => response);

}
