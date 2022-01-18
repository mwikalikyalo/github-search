export class User {
  constructor(
    public name: string,
    public username: string,
    public avatar_url: string,
    public bio: string,
    public followers: number,
    public following: number,
    public repos: number,
    public update: Date){
  }
}