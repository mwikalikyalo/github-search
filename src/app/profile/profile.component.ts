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

  user:any;
  repos:any;

  constructor(private profileservice:ProfileServiceService) { }

  ngOnInit(): void {
  }

  searchUserName(username:string){
    this.profileservice.userRequest(username)
    this.profileservice.getUser(username).subscribe(data=> {
      this.user=data})
    console.log(this.user)
    this.profileservice.repoRequest(username).subscribe((data)=>{
      this.repos = data
    })
    
  }
}

