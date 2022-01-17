export class User {
  showDescription= false;

  constructor(
    public userName: string,
    public userProfile: string,
    public followers: string,
    public following: string){
  }
}