import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Address } from '../models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  apiUrl = "https://localhost:44320/api/addresses/getall";

  constructor(private httpClient:HttpClient) { }

  getAddresses():Observable<ListResponseModel<Address>>{
    return this.httpClient.get<ListResponseModel<Address>>(this.apiUrl);
  }
}
