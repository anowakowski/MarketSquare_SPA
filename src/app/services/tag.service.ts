import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private httpClient: HttpClient) { }

  getAllTags(): Promise<Tag[]> {
    return this.httpClient
      .get<Tag[]>("https://localhost:5001/api/tags/getAllTags")
      .toPromise()
      .then(response => response);
  }
}
