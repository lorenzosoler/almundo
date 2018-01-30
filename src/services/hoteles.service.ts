import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HotelesService {

  constructor(public http: HttpClient) { }

}
