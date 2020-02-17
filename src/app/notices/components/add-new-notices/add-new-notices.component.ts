import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-notices',
  templateUrl: './add-new-notices.component.html',
  styleUrls: ['./add-new-notices.component.css']
})
export class AddNewNoticesComponent implements OnInit {

  addNewNoticesForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createaddNewNoticesForm();
  }

  createaddNewNoticesForm() {
    this.addNewNoticesForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.email]],
      description: ['', Validators.required],
      tags: ['']
    });
  }

  addNewNotices() {
    if (this.addNewNoticesForm.valid) {

    }
  }

}
