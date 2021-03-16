import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  apiUrl = "https://localhost:44320/api/invoices/getall";

  constructor(private httpClient:HttpClient) { }

  getInvoices():Observable<ListResponseModel<Invoice>>{
    return this.httpClient.get<ListResponseModel<Invoice>>(this.apiUrl);
  }
}
