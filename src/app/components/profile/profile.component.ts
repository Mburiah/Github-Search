import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
/*import { profile } from 'console';*/

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  repos: any;
  username: string;

  constructor( private profileService: ProfileService) {

  }

  findProfile() {
      this.profileService.updateProfile(this.username);
      this.profileService.getProfileInfo ().subscribe(profile => {
         console.log(profile);
         this.profile = profile;
        });

      this.profileService.getProfilerepos().subscribe(repos => {
          console.log(repos);
          this.repos = repos;
         });
  }
  ngOnInit() {
    this.profileService.updateProfile('mburiah');
    this.profileService.getProfileInfo().subscribe(profile => this.profile = profile);
    this.profileService.getProfilerepos().subscribe(repos =>  this.repos = repos);

  }
}

