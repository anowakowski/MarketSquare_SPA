import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { NewNotice } from 'src/app/models/new-notice';
import { BehaviorSubject } from 'rxjs';
import { Tag } from 'src/app/models/tag';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  private tagsSource = new BehaviorSubject(new Array<Tag>());
  currentTags = this.tagsSource.asObservable();

  constructor(private httpClient: HttpClient, private router: Router) {}

  getNoticeHttpParams(): HttpParams {
    let httpParams = new HttpParams();
    this.tagsSource.value
                .forEach(x => httpParams = httpParams.append('tags', x.id.toString()));
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

  addNotice(notice: NewNotice) {
    this.httpClient.post<any>("https://localhost:5001/api/notices/addNotice", notice).subscribe(() => {
      this.router.navigate(['/']);
    }, error => {
      // view error
    });
  }
}
