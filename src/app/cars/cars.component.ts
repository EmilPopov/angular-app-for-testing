import { Component, OnInit } from '@angular/core';
import { CarsService } from "./cars.service";
import { Car } from "../models/car";


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars:Car[];

  constructor(private carsService:CarsService) {
    carsService.getAll().then(cars => this.cars = cars)
   }

  ngOnInit() {

   
  }

}
