import { Component, OnInit } from "@angular/core";
import { Notice } from "src/app/models/Notice";

@Component({
  selector: "app-all-notices-list",
  templateUrl: "./all-notices-list.component.html",
  styleUrls: ["./all-notices-list.component.css"]
})
export class AllNoticesListComponent implements OnInit {
  notices: Notice[];
  constructor() {
    this.fillNotices();
  }

  ngOnInit() {

  }
  fillNotices() {
    this.notices = [
      {
        id: 1,
        name: "I will buy a bunch of honey",
        description: "I need a lof of nice honey to produce alkohol",
        creatorName: "Justyna Kowalska",
        creationDate: new Date("1/16/2020"),
        tags: ["food", "honey", "buy"]
      },
      {
        id: 2,
        name: "Lot of good honey for sell",
        description: "I have honey from my grandpartes, they live in small village",
        creatorName: "Adam Nowak",
        creationDate: new Date("10/19/2019"),
        tags: ["food", "honey", "sell"]
      },
      {
        id: 3,
        name: "Old school bike for sell",
        description: "Very pretty and well painted bike",
        creatorName: "Jan Jarząbek",
        creationDate: new Date("1/23/2020"),
        tags: ["bicycle", "sell"]
      }
    ];
  }
  formatDate(date) {
  const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}
}
