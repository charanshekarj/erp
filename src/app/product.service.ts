import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as traitData from 'src/assets/database/traits.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {}

  public traits = traitData;
  apiURL = 'src/assets/database/traits';

  public getJSON(){
    return this.traits;
}
  getProductTraits() {
    return this.http.get(`${this.apiURL}`);
  }

  getTrait(traitname:string) {
    return this.http.get(`${this.apiURL}/${traitname}`);
  }
}
