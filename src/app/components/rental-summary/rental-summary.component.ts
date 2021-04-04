import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetail';
import { RentalItem } from 'src/app/models/rentalItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-rental-summary',
  templateUrl: './rental-summary.component.html',
  styleUrls: ['./rental-summary.component.css']
})
export class RentalSummaryComponent implements OnInit {

  rentalItems:RentalItem[]=[];

  constructor(private cartService:CartService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCart()
  }

  getCart(){
    this.rentalItems = this.cartService.list();
  }

  removeFromCart(car:CarDetail){
    this.cartService.removeFromCart(car);
    this.toastrService.error("Silindi",car.carName );
  }

}
