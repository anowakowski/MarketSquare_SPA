import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';
import { Tag } from 'src/app/models/tag';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  private tagsSource = new BehaviorSubject(new Array<Tag>());
  currentTags = this.tagsSource.asObservable();

  constructor(private httpClient: HttpClient) {}

  getNoticeHttpParams(): HttpParams {
    let httpParams = new HttpParams();
    let tags = this.tagsSource.value
                .map(x => x.id)
                .forEach(x => httpParams = httpParams
                  .set('tags', x.toString()));
    return httpParams;
  }
  changeTags(tags: Tag[]) {
    this.tagsSource.next(tags);
  }

  getAllNotices(): Promise<any> {
    return this.httpClient
      .get<any>("https://localhost:5001/api/notices/getAllNotices", {params: this.getNoticeHttpParams()})
      .toPromise()
      .then(response => response);
  }
}