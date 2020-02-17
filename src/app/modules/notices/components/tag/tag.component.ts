import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  @Input() public tagName: string;

  @Output() public checked = new EventEmitter<string>();

  @Output() public unchecked = new EventEmitter<string>();

  private isChecked = false;

  constructor() { }

  ngOnInit() {
  }

  clicked() {
    this.isChecked = !this.isChecked;

    if (this.isChecked) {
      this.checked.emit(this.tagName);
    } else {
      this.unchecked.emit(this.tagName);
    }
  }
}
