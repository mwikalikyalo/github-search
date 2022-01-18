import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../profile-service.service';
import { Repository } from '../repository';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})

export class ProfileComponent implements OnInit {
  user!:User;
  repos!:Repository[];

  searchUserName(username:string){
    this.users_Request.userRequest(username);
    this.user = this.users_Request.user;
    this.users_Request.repoRequest(username).subscribe(data=>{
      this.repos = data
    })
    
  }

  constructor( private profileservice:ProfileServiceService) { }


  ngOnInit(): void {}

}

