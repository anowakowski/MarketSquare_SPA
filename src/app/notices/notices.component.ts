import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedTagsChanged(selectedTags: string[]) {
    console.log('Selected tags changed: ' + JSON.stringify(selectedTags));
  }
}
