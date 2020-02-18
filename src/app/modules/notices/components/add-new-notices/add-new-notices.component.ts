import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatChipInputEvent } from "@angular/material/chips";
import { Tag } from "src/app/models/tag";
import { TagService } from 'src/app/services/tag.service';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-add-new-notices",
  templateUrl: "./add-new-notices.component.html",
  styleUrls: ["./add-new-notices.component.css"]
})
export class AddNewNoticesComponent implements OnInit, OnDestroy {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  tags: Tag[] = [];

  availableTags: Tag[] = [];

  public addNewNoticesForm = new FormGroup({
    name: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required)
  });

  public tagControl = new FormControl();

  @ViewChild('tagInput', { static: false }) tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('autocomplete', { static: false }) autocomplete: MatAutocomplete;
  subscription: Subscription;

  constructor(private tagService: TagService) {
  }

  ngOnInit() {
    this.resetAvailableTagsList();
    this.subscription = this.tagControl.valueChanges.subscribe((value: string) => {
      this.tagService.getTagsByName(value).then(tags => this.availableTags = tags);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    if (this.addNewNoticesForm.valid && this.tagsAreNotEmpty()) {
      alert(JSON.stringify(this.addNewNoticesForm.value));
    }
  }

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || "").trim() && !this.autocomplete.isOpen) {
      this.tags.push({ name: value.trim(), id: 1 });
    }

    if (input) {
      input.value = "";
    }

    this.tagControl.setValue(null);

    this.resetAvailableTagsList();
  }

  removeTag(fruit: Tag): void {
    const index = this.tags.indexOf(fruit);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    this.tags.push(event.option.value);
    this.tagInput.nativeElement.value = '';
    this.tagControl.setValue(null);

    this.resetAvailableTagsList();
  }

  tagsAreNotEmpty(): boolean {
    return this.tags.length > 0;
  }

  submitDisabled(): boolean {
    return !(this.addNewNoticesForm.valid && this.tagsAreNotEmpty());
  }

  private resetAvailableTagsList() {
    this.tagService.getAllTags().then(tags => this.availableTags = tags);
  }
}
