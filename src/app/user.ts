export class User {
  constructor(
    public name: string,
    public avatar_url: string,
    public bio: string,
    public followers: string,
    public following: string,
    public repos: number){
  }
}