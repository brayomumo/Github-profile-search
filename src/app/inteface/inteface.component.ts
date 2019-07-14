import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-inteface',
  templateUrl: './inteface.component.html',
  styleUrls: ['./inteface.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InterfaceComponent implements OnInit {

  constructor() { }
  @Input()
  user: User;
  ngOnInit() {
  }

}

