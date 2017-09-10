import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { ProfileDataModel } from "../../models/profileData";


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileData: ProfileDataModel;
  showFollowers:boolean = false;

  constructor(private profileService: ProfileService) {
    
  }

  ngOnInit() {
    this.profileService.getData()
    .then(resp => { 
      this.profileData = resp;
    });
  }

  toggleFollowers(){
     this.showFollowers = !this.showFollowers;
  }

}
