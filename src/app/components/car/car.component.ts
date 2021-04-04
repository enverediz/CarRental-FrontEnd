import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';


import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:CarDetail[]=[];
  filterText:"";
  dataLoaded= false;  
  
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService, private cartService:CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["id"]) {
        this.getCarsByBrand(params["id"])
      }
      else{
        this.getCars()
      }
      if(params["id"]){
        this.getCarsByColor(params["id"])
      }
      else{
        this.getCars()
      }
      
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
      this.dataLoaded=true
    });
  }

  getCarsByBrand(id:number){
    this.carService.getCarsByBrand(id).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded=true
    });
  }

  getCarsByColor(id:number){
    this.carService.getCarsByColor(id).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded=true
    });
  }

  addToRental(car:CarDetail){
    this.toastrService.success("Kiralandi.", car.carName)
    this.cartService.addToCart(car);
  }

  goToDetail(car:CarDetail){

  }

}