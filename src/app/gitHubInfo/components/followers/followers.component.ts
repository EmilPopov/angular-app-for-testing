import { Component, OnInit } from '@angular/core';
import { FollowersService } from "../../services/followers.service";
import { FollowersDataModel } from "../../models/followersData";


@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  followerData : FollowersDataModel

  constructor(private followersService:FollowersService) { }

  ngOnInit() {
    this.followersService
    .getData()
    .then(resp => {    
      this.followerData = resp} )

  }

}
