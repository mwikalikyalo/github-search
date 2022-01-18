import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../profile-service.service';
import { Repository } from '../repository';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';


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
    
  constructor(private http: HttpClient, private profileService: ProfileServiceService) { }

  ngOnInit(): void {
  }
  searchUser(username: string){
    return this.http.get(`https://api.github.com/users/${username}? -d {"access_token": ${environment.apiKey} }`)
    .subscribe((response: any)=>{
      this.git.next(response); 
      this.searchUserRepo(username);   
    });
  
  }
  searchUserRepo(username: string) {
    throw new Error('Method not implemented.');
  }
    
}

