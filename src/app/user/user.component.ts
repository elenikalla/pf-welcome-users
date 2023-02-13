import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  uname:string;
  constructor() {
    this.uname = "Nik"
   }
  ngOnInit(): void {
    this.uname = 'Ann';
  }
}

