import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/models/invoice';
import {HttpClient} from '@angular/common/http';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoices:Invoice[] = [];
  dataLoaded= false;  
  
  constructor(private invoiceService:InvoiceService) { }

  ngOnInit(): void {
    this.getInvoices();
  }

  getInvoices(){
    this.invoiceService.getInvoices().subscribe(response=>{
      this.invoices = response.data
      this.dataLoaded=true
    });
  }

}
