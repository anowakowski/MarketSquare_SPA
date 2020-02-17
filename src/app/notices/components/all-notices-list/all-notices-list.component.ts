import { Component, OnInit } from "@angular/core";
import { Notice } from "src/app/models/Notice";

@Component({
  selector: "app-all-notices-list",
  templateUrl: "./all-notices-list.component.html",
  styleUrls: ["./all-notices-list.component.css"]
})
export class AllNoticesListComponent implements OnInit {
  notices: Notice[];
  constructor() {}

  ngOnInit() {}
}
