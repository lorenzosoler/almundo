import {environment} from '../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Hotel } from "../models/hotel";

@Injectable()
export class HotelesService {
  private endpoint = environment.endpoint;

  constructor(public http: HttpClient) { }

  public getAllHoteles (): Observable<Hotel[]> {
    return this.http.get(this.endpoint + '/hoteles').map(this.mapHoteles);
  }

  private mapHoteles(hoteles: Array<any>) {
    let result: Array<Hotel> = [];

    if (hoteles) {
      hoteles.forEach((hotel: any) => {
        result.push(
          new Hotel(hotel)
        )
      });
    }
    return result;
  }

}
