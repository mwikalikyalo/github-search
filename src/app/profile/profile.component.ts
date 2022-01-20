import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ProfileServiceService } from '../profile-service.service';
import { Repository } from '../repository';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!:User;
  repos!:Repository[];
  users_Request: any;

  searchUserName(username:string){
    this.users_Request.userRequest(username);
    this.user = this.users_Request.user;
    this.users_Request.repoRequest(username).subscribe((data: Repository[])=>{
      this.repos = data
    })
    
  }

  constructor( private profileservice:ProfileServiceService) { }


  ngOnInit(): void {}

}
