import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { FollowersDataModel } from "../models/followersData";

const baseUrl = "https://api.github.com/users/ivaylokenov/followers";

@Injectable()
export class FollowersService {

  constructor(private http:Http) { }

  getData(): Promise<FollowersDataModel> {
    return this.http
      .get(baseUrl)
      .toPromise()
      .then(resp => resp.json() as FollowersDataModel)
      .catch(err => {
        console.log(err);
        return new FollowersDataModel();
      })

  }

}
