import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {

  private selectedTags: string[] = [];

  @Output() selectionChanged = new EventEmitter<string[]>();

  public availableTags: string[] = [];

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.tagService.getAllTags().then(tags => this.availableTags = tags);
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
