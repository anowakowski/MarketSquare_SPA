import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NewNotice } from 'src/app/models/new-notice';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  constructor(private httpClient: HttpClient) {}

  getAllNotices(): Promise<any> {
    return this.httpClient
      .get<any>("https://localhost:5001/api/notices/getAllNotices")
      .toPromise()
      .then(response => response);
  }

  addNotice(notice: NewNotice) {
    this.httpClient.post<any>("https://localhost:5001/api/notices/addNotice", notice).subscribe(data => console.log(data));
  }
}
