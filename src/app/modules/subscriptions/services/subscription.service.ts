import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private httpClient: HttpClient) { }
  // #TODO
  // Change subscribtions for current user instead of hardcoded
  getSubscribedNotices(): Promise<any> {
    return this.httpClient
      .get<any>("https://localhost:5001/api/Notices/getMyNotices?username=kamil")
      .toPromise()
      .then(response => response);
  }
}

