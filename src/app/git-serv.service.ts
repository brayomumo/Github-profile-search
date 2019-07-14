import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class GitServe {
  getUser(value: any) {
    throw new Error("Method not implemented.");
  }

  private username: string;
  private clientid = 'b9df7228b72cb025a0c8';
  private clientsecret = '734fbd270cd924eda0b1653ae0d154f8ecb139f3';
  constructor(private http: Http) {
    // tslint:disable-next-line: quotemark
    // console.log("Service is now ready!");
    this.username = 'emmanuelmuchiri';
  }
  getProfileInfo(){
  	return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	.map(res => res.json());
  }

  getProfileRepos(){
  	// tslint:disable-next-line: indent
  	return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	.map(res => res.json());
  }

  updateProfile(username:string){
  	this.username = username;
  }

}
