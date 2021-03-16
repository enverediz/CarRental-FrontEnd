import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/models/payment';
import {HttpClient} from '@angular/common/http';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payments:Payment[] = [];
  dataLoaded= false;  
  
  constructor(private paymentService:PaymentService) { }

  ngOnInit(): void {
    this.getPayments();
  }

  getPayments(){
    this.paymentService.getPayments().subscribe(response=>{
      this.payments = response.data
      this.dataLoaded=true
    });
  }

}
