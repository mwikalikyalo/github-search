import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Repository } from './repository';
import { Observable } from 'rxjs';

interface ApiResponse{
  username: string;
  update: Date;
  login:string,  
  followers:number, 
  following:number, 
  avatar_url:string,
  created_at:Date
}

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {
  user!:User;

  getUser(username:string){
    return this.http.get(`https://api.github.com/users/${username}`)
  }
  userRequest(username:any){
    return this.http.get<ApiResponse>(environment.apiUrl +/users/ +username)  
  }
  repoRequest(username:string):Observable<Repository[]>{
    return this.http.get<Repository[]>(environment.apiUrl+/users/ + username + "/repos")
   }

   constructor(private http:HttpClient) {
     this.user = new User ("","","", 0, 0,0,new Date())
   }

   ngOnInit(): void {
  }
}
 




  

