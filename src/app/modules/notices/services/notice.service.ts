import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';
import { Tag } from 'src/app/models/tag';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  private tagsSource = new BehaviorSubject(new Array<Tag>());
  currentTags = this.tagsSource.asObservable();

  constructor(private httpClient: HttpClient) {}

  changeTags(tags: Tag[]) {
    this.tagsSource.next(tags);
  }

  getAllNotices(): Promise<any> {
    return this.httpClient
      .get<any>("https://localhost:5001/api/notices/getAllNotices")
      .toPromise()
      .then(response => response);
  }
}
