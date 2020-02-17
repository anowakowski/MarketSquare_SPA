import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Tag } from 'src/app/models/tag';

@Component({
  selector: "app-add-new-notices",
  templateUrl: "./add-new-notices.component.html",
  styleUrls: ["./add-new-notices.component.css"]
})
export class AddNewNoticesComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  tags: Tag[] = [
    { name: '#Food', id: 1 },
    { name: '#Honey', id: 2 },
    { name: '#Game', id: 3 },
  ];

  public addNewNoticesForm = new FormGroup({
    name: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required)
  });

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    alert(JSON.stringify(this.addNewNoticesForm.value));
  }


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.tags.push({name: value.trim(), id: 1});
    }

    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Tag): void {
    const index = this.tags.indexOf(fruit);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

}
