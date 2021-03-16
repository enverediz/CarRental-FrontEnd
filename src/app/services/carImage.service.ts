import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarImage } from '../models/carImage';
import { CarImageDetail } from '../models/carImageDetail';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = "https://localhost:44320/api/cars/getcarimagedatils";

  constructor(private httpClient:HttpClient) { }

  getCarImages():Observable<ListResponseModel<CarImageDetail>>{
    return this.httpClient.get<ListResponseModel<CarImageDetail>>(this.apiUrl);
  }
}
