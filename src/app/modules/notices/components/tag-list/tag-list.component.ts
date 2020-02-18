import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TagService } from 'src/app/services/tag.service';
import { Tag } from 'src/app/models/tag';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {

  private selectedTags: Tag[] = [];

  @Output() selectionChanged = new EventEmitter<Tag[]>();

  public availableTags: Tag[] = [];

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.tagService.getAllTags().then(tags => this.availableTags = tags);
  }

  checked(tag: Tag) {
    this.selectedTags.push(tag);
    this.notifyObservers();
  }

  unchecked(tag: Tag) {
    const index: number = this.selectedTags.indexOf(tag, 0);
    if (index > -1) {
      this.selectedTags.splice(index, 1);
      this.notifyObservers();
    }
  }

  private notifyObservers() {
    this.selectionChanged.emit(this.selectedTags);
  }
}
