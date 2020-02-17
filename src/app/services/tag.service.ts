import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private httpClient: HttpClient) { }

  getAllTags(): Promise<any> {
    return this.httpClient
      .get<any>("https://localhost:5001/api/tags/getAllTags")
      .toPromise()
      .then(response => response);
  }
}
