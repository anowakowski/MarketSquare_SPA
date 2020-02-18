import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Tag } from 'src/app/models/tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  @Input() public tag: Tag;

  @Output() public checked = new EventEmitter<Tag>();

  @Output() public unchecked = new EventEmitter<Tag>();

  private isChecked = false;

  constructor() { }

  ngOnInit() {
  }

  clicked() {
    this.isChecked = !this.isChecked;

    if (this.isChecked) {
      this.checked.emit(this.tag);
    } else {
      this.unchecked.emit(this.tag);
    }
  }
}
