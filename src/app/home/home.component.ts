// import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
// import { GitServe } from '../git-serv.service';
// import { User } from '../user';
// import { Observable } from 'rxjs';
// import { filter, switchMap, debounceTime, catchError } from 'rxjs/operators';
// import { EMPTY } from 'rxjs';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {


//   constructor(private githubService: GitServe) { }
//   findControl = new FormControl();
//   error: boolean = false;
//   user: User = null;
//   ngOnInit() {
//     this.findControl.valueChanges
//       .pipe(filter(value => value.length > 3),
//       debounceTime(1000),
//       switchMap(value =>
//         this.githubService.getUser(value).pipe(
//           catchError(err => {
//             this.user = null;
//             this.error = true;
//             return EMPTY;
//           })))
//       ).subscribe(user => {
//         this.user = user;
//         this.error = false;
//       });
//   }

// }
