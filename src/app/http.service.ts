import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  placeApi = "http://wanmuz-rest-api-2019.herokuapp.com/api/places/";
  places;

  constructor(private http: HttpClient) {}

  getPlaces() {
    return this.http.get(`${this.placeApi}`).pipe(
      tap(resp => {
        this.places = resp;
        console.log(this.places);
      })
    );
  }

  getItemById(id) {
    for (let i = 0; i < this.places.length; i++) {
      if (this.places[i].id == id) {
        return this.places[i];
      }
    }
  }
}
