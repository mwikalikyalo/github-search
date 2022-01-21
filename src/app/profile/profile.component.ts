import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { ProfileServiceService } from '../profile-service.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  user: any = User;
  repos: any = Repository;
  users_Request: any;

  searchUserName(username:string){
    this.users_Request.userRequest(username);
    this.user = this.users_Request.user;
    this.users_Request.repoRequest(username).subscribe((data: typeof Repository)=>{
      this.repos = data
    })
    
  }
  constructor(private profileservice:ProfileServiceService) { }

  ngOnInit(): void {
  }

}

