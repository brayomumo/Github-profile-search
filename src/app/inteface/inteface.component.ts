import { Component, OnInit, ComponentFactory } from '@angular/core';
import { GitServe } from '../git-serv.service';
import { User } from '../user';
import { Repos } from '../repositories';


@Component({
  selector: 'app-inteface',
  templateUrl: './inteface.component.html',
  styleUrls: ['./inteface.component.css']
})
export class InterfaceComponent implements OnInit {
  username:string;
  profile:User;
  repos:Repos
  constructor(private profileService: GitServe) {

  }

  findProfile(){
  	this.profileService.updateProfile(this.username)
  	this.profileService.getProfileInfo().subscribe(profile => {
  		console.log(profile);
  		this.profile = profile;
  	})

  	this.profileService.getProfileRepos().subscribe(repos => {
  		console.log(repos);
  		this.repos = repos;
  	})
  }

  ngOnInit() {
    interface ApiResponse{
    name: string;
    login: string;
    avatar_url: any;
    html_url: string;
    public_repos: string;
    }
  }

}
