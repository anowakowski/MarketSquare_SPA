import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {

  private selectedTags: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  checked(tagName: string) {
    this.selectedTags.push(tagName);
  }

  unchecked(tagName: string) {
    const index: number = this.selectedTags.indexOf(tagName, 0);
    if (index > -1) {
      this.selectedTags.splice(index, 1);
    }
  }
}
