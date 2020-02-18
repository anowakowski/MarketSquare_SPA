import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  constructor(private httpClient: HttpClient) { }

  getUsernameHttpParams(): HttpParams {
    return new HttpParams().set('username', 'kamil');
  }

  getAllUsers(): Promise<any> {
    return this.httpClient
      .get<any>("https://localhost:5001/api/users/getAllUsers")
      .toPromise()
      .then(response => response);
  }
  
  getAllTags(): Promise<any> {
    return this.httpClient
      .get<any>("https://localhost:5001/api/tags/getAllTags")
      .toPromise()
      .then(response => response);
  }

  subscribeUser(username: string) {
    return this.httpClient
    .get<any>("https://localhost:5001/api/settings/subscribeUser",
      { params: this.getUsernameHttpParams().set('subscribedUsername', username) })
    .toPromise()
    .then(response => response);
  }

  unsubscribeUser(username: string) {
    return this.httpClient
    .get<any>("https://localhost:5001/api/settings/unsubscribeUser",
      { params: this.getUsernameHttpParams().set('subscribedUsername', username) })
    .toPromise()
    .then(response => response);
  }

  subscribeTag(tag: string) {
    return this.httpClient
    .get<any>("https://localhost:5001/api/settings/subscribeTag",
      { params: this.getUsernameHttpParams().set('tag', tag) })
    .toPromise()
    .then(response => response);
  }

  unsubscribeTag(tag: string) {
    return this.httpClient
    .get<any>("https://localhost:5001/api/settings/unsubscribeTag",
      { params: this.getUsernameHttpParams().set('tag', tag) })
    .toPromise()
    .then(response => response);
  }

  blacklistUser(username: string) {
    return this.httpClient
    .get<any>("https://localhost:5001/api/settings/blacklistUser",
      { params: this.getUsernameHttpParams().set('subscribedUsername', username) })
    .toPromise()
    .then(response => response);
  }

  unblacklistUser(username: string) {
    return this.httpClient
    .get<any>("https://localhost:5001/api/settings/unblacklistUser",
      { params: this.getUsernameHttpParams().set('subscribedUsername', username) })
    .toPromise()
    .then(response => response);
  }

  blacklistTag(tag: string) {
    return this.httpClient
    .get<any>("https://localhost:5001/api/settings/blacklistTag",
      { params: this.getUsernameHttpParams().set('tag', tag) })
    .toPromise()
    .then(response => response);
  }

  unblacklistTag(tag: string) {
    return this.httpClient
    .get<any>("https://localhost:5001/api/settings/unblacklistTag",
      { params: this.getUsernameHttpParams().set('tag', tag) })
    .toPromise()
    .then(response => response);
  }

  getBlacklistedTags(): Promise<any> {
    return this.httpClient
      .get<any>("https://localhost:5001/api/settings/getBlacklistedTags", { params: this.getUsernameHttpParams() })
      .toPromise()
      .then(response => response);
  }

  getSubscribedTags(): Promise<any> {
    return this.httpClient
      .get<any>("https://localhost:5001/api/settings/getSubscribedTags", { params: this.getUsernameHttpParams() })
      .toPromise()
      .then(response => response);
  }

  getBlacklistedUsers(): Promise<any> {
    return this.httpClient
      .get<any>("https://localhost:5001/api/settings/getBlacklistedUsers", { params: this.getUsernameHttpParams() })
      .toPromise()
      .then(response => response);
  }

  getSubscribedUsers(): Promise<any> {
    return this.httpClient
      .get<any>("https://localhost:5001/api/settings/getSubscribedUsers", { params: this.getUsernameHttpParams() })
      .toPromise()
      .then(response => response);
  }
}
