import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatChipInputEvent } from "@angular/material/chips";
import { Tag } from "src/app/models/tag";
import { TagService } from 'src/app/services/tag.service';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';

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
    { name: "#Food", id: 1 },
    { name: "#Honey", id: 2 },
    { name: "#Game", id: 3 }
  ];

  availableTags: Tag[] = [];

  public addNewNoticesForm = new FormGroup({
    name: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required)
  });

  public tagControl = new FormControl();

  @ViewChild('tagInput', { static: false }) tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('autocomplete', { static: false }) autocomplete: MatAutocomplete;

  constructor(private tagService: TagService) {}

  ngOnInit() {
    this.tagService.getAllTags().then(tags => this.availableTags = tags);
  }

  onSubmit() {
    if (this.addNewNoticesForm.valid && this.tagsAreNotEmpty()) {
      alert(JSON.stringify(this.addNewNoticesForm.value));
    }
  }

  addTag(event: MatChipInputEvent): void {
    console.log("addTag ");
    console.log(event);

    const input = event.input;
    const value = event.value;

    if ((value || "").trim() && !this.autocomplete.isOpen) {
      this.tags.push({ name: value.trim(), id: 1 });
    }

    if (input) {
      input.value = "";
    }

    this.tagControl.setValue(null);
  }

  removeTag(fruit: Tag): void {
    const index = this.tags.indexOf(fruit);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    console.log("optionSelected ");
    console.log(event);

    this.tags.push(event.option.value);
    this.tagInput.nativeElement.value = '';
    this.tagControl.setValue(null);
  }

  tagsAreNotEmpty(): boolean {
    return this.tags.length > 0;
  }

  submitDisabled(): boolean {
    return !(this.addNewNoticesForm.valid && this.tagsAreNotEmpty());
  }
}
