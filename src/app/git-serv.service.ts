import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitServService {
  private username: string;
  private clientId = '1560ae83c3ec6ed02792';
  private ClientSecret = 'f6eeacbb082b686c6103070652c2db1ae2ac7797';

  constructor(private http: Http ) {
    console.log('Service is now ready!');
    this.username = 'brayomumo';
   }
   getProfileInfo(){
    // tslint:disable-next-line: max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientId + '&client_secret' + this.ClientSecret).forEach(res => res.json());
   }
}
