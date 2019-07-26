import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-places",
  templateUrl: "./places.page.html",
  styleUrls: ["./places.page.scss"]
})
export class PlacesPage implements OnInit {
  places;

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.http.getPlaces().subscribe(resp => {
      this.places = resp;
      console.log(resp);
    });
  }
}
