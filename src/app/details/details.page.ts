import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.page.html",
  styleUrls: ["./details.page.scss"]
})
export class DetailsPage implements OnInit {
  item;
  constructor(public http: HttpService, public route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params["id"];
      console.log(id);
      this.item = this.http.getItemById(id);
      console.log(this.item);
    });
  }
}
