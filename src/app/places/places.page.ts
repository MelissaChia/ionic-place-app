import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-places",
  templateUrl: "./places.page.html",
  styleUrls: ["./places.page.scss"]
})
export class PlacesPage implements OnInit {
  places = [
    {
      id: 1,
      logo: "assets/malaysia.png",
      name: "Malaysia"
    },
    {
      id: 2,
      logo: "assets/macau.jpeg",
      name: "Macau"
    },
    {
      id: 3,
      logo: "assets/singapore.png",
      name: "Singapore"
    },
    {
      id: 4,
      logo: "assets/australia.png",
      name: "Australia  "
    }
  ];

  constructor() {}

  ngOnInit() {}
}
