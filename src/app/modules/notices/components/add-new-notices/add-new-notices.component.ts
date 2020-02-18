import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatChipInputEvent } from "@angular/material/chips";
import { Tag } from "src/app/models/tag";
import { TagService } from 'src/app/services/tag.service';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { Subscription } from 'rxjs';
import { NoticeService } from '../../services/notice.service';

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

  constructor(private tagService: TagService, private noticeService: NoticeService) {
  }

  ngOnInit() {
    this.resetAvailableTagsList();
    this.subscription = this.tagControl.valueChanges.subscribe((value: string) => {
      this.tagService.getTagsByName(value).then(allTags => this.availableTags = allTags
        .filter(tag => !this.tags.some(selectedTag => tag.id === selectedTag.id && tag.name === selectedTag.name)));
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    if (this.addNewNoticesForm.valid && this.tagsAreNotEmpty()) {
      const formValue = this.addNewNoticesForm.value;
      formValue.tags = this.tags;
      this.noticeService.addNotice(formValue);
    }
  }

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    const v = (value || "").trim();
    if (v) {
      if (this.tags.map(t => t.name).indexOf(v) < 0) {
        this.tags.push({ name: v, id: 0 });
        input.value = "";
      } else {
        if (input) {
          input.value = "";
        }
      }
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

    this.resetAvailableTagsList();
  }

  tagsAreNotEmpty(): boolean {
    return this.tags.length > 0;
  }

  submitDisabled(): boolean {
    return !(this.addNewNoticesForm.valid && this.tagsAreNotEmpty());
  }

  private resetAvailableTagsList() {
    this.tagService.getAllTags().then(allTags => this.availableTags = allTags
      .filter(tag => !this.tags.some(selectedTag => tag.id === selectedTag.id && tag.name === selectedTag.name)));
  }
}
