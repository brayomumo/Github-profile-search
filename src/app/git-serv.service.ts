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
  private clientid = '1560ae83c3ec6ed02792';
  private clientsecret = 'f6eeacbb082b686c6103070652c2db1ae2ac7797';
  constructor(private http: Http) {
    // tslint:disable-next-line: quotemark
    // console.log("Service is now ready!");
    this.username = 'brayomumo';
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
