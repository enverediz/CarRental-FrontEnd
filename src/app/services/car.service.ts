import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44320/api/";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByBrand(id:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getbybrandid?id=" + id
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByColor(id:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getbycolorid?id="+ id
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}
