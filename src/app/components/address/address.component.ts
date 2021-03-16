import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';
import {HttpClient} from '@angular/common/http';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  addresses:Address[]=[];
  dataLoaded= false;  
  
  constructor(private addressService:AddressService) { }

  ngOnInit(): void {
    this.getAddresses();
  }

  getAddresses(){
    this.addressService.getAddresses().subscribe(response=>{
      this.addresses = response.data
      this.dataLoaded=true
    });
  }

}
