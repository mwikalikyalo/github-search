import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProfileServiceService } from '../profile-service.service';
import { User } from "../user";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  username="";

  constructor(public profileservice:ProfileServiceService) { }
  searchedUser = new User("","","",0,0,0,new Date());

  @Output () searchForUser:EventEmitter<string> = new EventEmitter();

  searchUser(){
    this.searchForUser.emit(this.username)

    console.log("check username",this.username);
  }

  ngOnInit(): void {
  }

}

