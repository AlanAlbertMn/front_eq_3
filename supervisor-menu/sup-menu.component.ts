import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sup-menu',
  templateUrl: './sup-menu.component.html',
  styleUrls: ['./sup-menu.component.css']
})
export class SupMenuComponent implements OnInit {
  dept = [];
  name: string;

  constructor(private auth: AuthService) {
    this.name = this.auth.name;
  }

  ngOnInit(): void {
    this.dept = this.auth.depart;
    console.log("departamentos " + this.dept);
  }

  selectDepartment(value:number){
    this.auth.dep_actual = value;
    console.log("departamento actual " + this.auth.dep_actual);
  }


}
