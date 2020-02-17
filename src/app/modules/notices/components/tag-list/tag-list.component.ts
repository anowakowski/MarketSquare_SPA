import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  checked(tagName: string) {
    console.log('Checked tag: ' + tagName);
  }

  unchecked(tagName: string) {
    console.log('Unchecked tag: ' + tagName);
  }
}
