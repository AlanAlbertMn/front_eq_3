import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NotificacionesComponent } from '../notificaciones/notificaciones.component';
import {MatDialog} from '@angular/material/dialog'; 

@Component({
  selector: 'app-sup-menu',
  templateUrl: './sup-menu.component.html',
  styleUrls: ['./sup-menu.component.css']
})
export class SupMenuComponent implements OnInit {
  dept = [];
  name: string;

  constructor(private auth: AuthService, private dialog: MatDialog) {
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

  openDialog() {
    const dialogRef = this.dialog.open(NotificacionesComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(' here is the result ' + result );
    })
  }


}
