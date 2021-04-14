import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CrudService } from '../../services/crud.service';
import { NotificacionesComponent } from '../notificaciones/notificaciones.component';

import {
  MatDialog,
  MatDialogRef, 
  MAT_DIALOG_DATA
} from '@angular/material/dialog'; 


@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  name:string;
  dept = [];

  constructor(private router: Router, 
    private crudService: CrudService,
    private auth: AuthService, private dialog: MatDialog) { 
      this.name = this.auth.name;
    }

  ngOnInit(): void {
    this.dept = this.auth.depart;
  }

  goNominas(){
    this.router.navigate(['nominas'])
  }

  goContabilidad(){
    this.router.navigate(['contabilidad'])
  }

  goRH(){
    this.router.navigate(['recursos_humanos'])
  }

  goDocAdicional(){
    this.router.navigate(['documentacion'])
  }

  openDialog() {
    const dialogRef = this.dialog.open(NotificacionesComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(' here is the result ' + result );
    })
  }

}
