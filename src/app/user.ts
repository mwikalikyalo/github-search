export class User {
  showDescription= false;

  constructor(
    public userName: string,
    public userProfile: string,
    public userFollowers: string,
    public userFollowing: string){
  }
}