import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Repository } from './repository';

@Injectable({
  providedIn: 'root'
})

export class ProfileServiceService {
  user!:User

  userRequest(username:string){
    interface ApiResponse{
      name:string, 
      username:string,
      avatar_url:string,
      bio:string, 
      followers:number, 
      following:number, 
      update:Date
    }
    let promise: any= new Promise<void>((resolve, reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl +/users/ +username).toPromise().then(response =>{
        this.user.name = response!.name;
        this.user.username= response!.username;
        this.user.bio= response!.bio;
        this.user.avatar_url = response!.avatar_url;
        this.user.followers = response!.followers;
        this.user.following = response!.following;
        this.user.update = response!.update;

      }, error=>{
        
        console.log("Page not found")
      })

      return promise

    })
  }

  repoRequest(username:string):Observable<Repository[]>{
    return this.http.get<Repository[]>(`${environment.apiUrl}/users${username}/repos`)
   }

  constructor(private http:HttpClient) {
    this.user = new User ("","","","",0, 0, 0,new Date())
   }

   ngOnInit(): void {
  }
}