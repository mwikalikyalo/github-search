import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {
  git = new BehaviorSubject<any>([]);
  gitRepo = new BehaviorSubject<any>([]);
  repos:any;
  public username:string | undefined;

  constructor(private http:HttpClient) {   
  }

 public getUser()
  {
    interface UserApiResponse
    {
      name: string;
      avatar_url: string;
      bio: string;
      followers: number;
      following: number;
      repos:number;
    }
 
    return this.http.get<UserApiResponse>(`https://api.github.com/users/${this.username}? -d {"access_token": ${environment.apiKey} }    `)
      .subscribe((response: any)=>{
        this.git.next(response);
        console.log(response);
      });
  }
  
  searchUser(username: string)
  {
    return this.http.get(`https://api.github.com/users/${username}? -d {"access_token": ${environment.apiKey} }`)
    .subscribe((response: any)=>{
      this.git.next(response); 
      this.searchUserRepo(username);   
    });
  
  }
  
  getGits()
  {
    return this.git.asObservable();
  }

  getRepository()
  {
    interface RepoApiResponse
    {
      name: string;
      about: string;
      url: string;
      language: string;
      forks: number;
    }
    
    return this.http.get(`https://api.github.com/users/${this.username}/repos? -d {"access_token": ${environment.apiKey} }`)
    .subscribe((response: any)=>{
      this.gitRepo.next(response);
    });
  }

  searchUserRepo(username: string)
  {
    return this.http.get(`https://api.github.com/users/${username}/repos? -d {"access_token": ${environment.apiKey} }`)
    .subscribe((response: any)=>{
      this.gitRepo.next(response);
    });
  }

  getRepos()
  {
    return this.gitRepo.asObservable();

  }
}
