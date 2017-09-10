import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { ProfileDataModel } from "../models/profileData";
import 'rxjs/add/operator/toPromise';
// import {Observable} from 'rxjs/Observable';


const baseUrl = "https://api.github.com/users/ivaylokenov";

@Injectable()
export class ProfileService {

  constructor(private http: Http) {

  }

  getData(): Promise<ProfileDataModel> {
    return this.http
      .get(baseUrl)
      .toPromise()
      .then(resp => resp.json() as ProfileDataModel)
      .catch(err => {
        console.log(err);
        return new ProfileDataModel();
      })

  }

}
