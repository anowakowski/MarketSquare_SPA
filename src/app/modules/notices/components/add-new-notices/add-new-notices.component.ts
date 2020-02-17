import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

export interface Fruit {
  name: string;
}
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
  fruits: Fruit[] = [
    {name: 'Lemon'},
    {name: 'Lime'},
    {name: 'Apple'},
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

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
}