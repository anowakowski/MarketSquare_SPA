import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-add-new-notices",
  templateUrl: "./add-new-notices.component.html",
  styleUrls: ["./add-new-notices.component.css"]
})
export class AddNewNoticesComponent implements OnInit {
  public items = [
    { display: "Pizza", value: 1 },
    { display: "Pasta", value: 2 },
    { display: "Parmesan", value: 3 }
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
}
