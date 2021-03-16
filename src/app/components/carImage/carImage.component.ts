import { Component, OnInit } from '@angular/core';
import { CarImage } from 'src/app/models/carImage';
import {HttpClient} from '@angular/common/http';
import { CarImageService } from 'src/app/services/carImage.service';
import { CarImageDetail } from 'src/app/models/carImageDetail';

@Component({
  selector: 'app-carImage',
  templateUrl: './carImage.component.html',
  styleUrls: ['./carImage.component.css']
})
export class CarImageComponent implements OnInit {

  carImages:CarImageDetail[] = [];
  dataLoaded= false;  
  
  constructor(private carImageService:CarImageService) { }

  ngOnInit(): void {
    this.getCarImages();
  }

  getCarImages(){
    this.carImageService.getCarImages().subscribe(response=>{
      this.carImages = response.data
      this.dataLoaded=true
    });
  }

}
