import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../profile-service.service';
import { Repository } from '../repository';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ProfileServiceService]
})
export class SearchComponent implements OnInit {
    User!: User;
    Repository!: Repository;
    repositories:any;
    git:any;
    
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
