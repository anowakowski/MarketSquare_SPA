import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {

  private selectedTags: string[] = [];

  @Output() selectionChanged = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit() {
  }

  checked(tagName: string) {
    this.selectedTags.push(tagName);
    this.notifyObservers();
  }

  unchecked(tagName: string) {
    const index: number = this.selectedTags.indexOf(tagName, 0);
    if (index > -1) {
      this.selectedTags.splice(index, 1);
      this.notifyObservers();
    }
  }

  private notifyObservers() {
    this.selectionChanged.emit(this.selectedTags);
  }
}
