import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  // url = "/data.json";
  url = "https://ng-phillydotnet.firebaseio.com/.json";

  constructor(private http:Http) {

  }

  getPlayers() {
    return this.http.get(this.url).map( (res) => res.json() );
    //   .subscribe(
    //
    //   (data) => console.log(data)
    //
    // );
  }

}
