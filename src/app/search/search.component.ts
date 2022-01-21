import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfileServiceService } from '../profile-service.service';
import { User } from '../user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private profileservice:ProfileServiceService) { }
  searchedUser = new User("","","","",0,0,0,new Date());

  @Output () searchForUser:EventEmitter<string> = new EventEmitter<string>();

  searchUser(){
    this.searchForUser.emit(this.searchedUser.name)
    this.searchedUser = new User("","","","",0,0,0,new Date())
}

  ngOnInit(): void {
  }

}
