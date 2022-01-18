import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../profile-service.service';
import { Repository } from '../repository';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileServiceService]
})

export class ProfileComponent implements OnInit {
    User!: User;
    Repository!: Repository;

  constructor(private http: HttpClient, private profileService:ProfileServiceService) {

   }

  ngOnInit(): void {
  }

}
