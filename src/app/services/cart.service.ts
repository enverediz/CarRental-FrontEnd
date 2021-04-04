import { Injectable } from '@angular/core';
import { CarDetail } from '../models/carDetail';
import { RentalItem } from '../models/rentalItem';
import { RentalItems } from '../models/rentalItems';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(car:CarDetail){
    let item = RentalItems.find(r=>r.car.carName===car.carName)
    if(item){
      item.quantity+=1
    }else{
      let rentalItem = new RentalItem();
      rentalItem.car = car;
      rentalItem.quantity = 1;
      RentalItems.push(rentalItem)
    }
  }

  removeFromCart(car:CarDetail){
    let item:RentalItem = RentalItems.find(r=>r.car.carName===car.carName)
    RentalItems.splice(RentalItems.indexOf(item),1)
  }

  list():RentalItem[]{
    return RentalItems;
  }
}
