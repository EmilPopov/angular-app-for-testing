import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CarsService } from "../cars.service";
import { Car } from "../../models/car";


@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  carId:string;
  car:Car;

  constructor(private route:ActivatedRoute, private carService:CarsService) { 
      this.carId = this.route.snapshot.paramMap.get('id');
      this.carService.getCar(this.carId).then(car => this.car = car);
   }

  ngOnInit() {
  }

}
