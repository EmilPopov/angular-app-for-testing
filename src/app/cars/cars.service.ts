import { Injectable } from '@angular/core';
import { CarsData } from "../api/carsData";
import { Car } from "../models/car";



@Injectable()
export class CarsService {

  constructor() { }

  getAll(): Promise<Car[]> {
    return Promise.resolve(CarsData.cars);
  }

  getCar(id:string){
    return this.getAll()
    .then(cars => cars.find(car => car.id === id));
  }

}
