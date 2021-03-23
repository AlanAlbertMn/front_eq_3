import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CrudService } from '../../services/crud.service';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import {formatDate} from '@angular/common';
import {MatTableDataSource} from '@angular/material/table';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-admin-avisos',
  templateUrl: './admin-avisos.component.html',
  styleUrls: ['./admin-avisos.component.css']
})
export class AdminAvisosComponent implements OnInit {
  displayedColumns: string[] = ['Nombre', 'Usuario','Notificacion'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatTable) table: MatTable<any>;
  array:any;

  type=999;
  notifs = [];
  tipos = [
    '',
    'Cliente',
    'Operador de Nomina',
    'Recepcion',
    'Supervisor',
    'Administrador'
  ];
  constructor(private router: Router, private crudService: CrudService,
    private formBuilder: FormBuilder) { 

    }

  ngOnInit(): void {

    this.crudService.get_notifications()
    .then(res => {
        console.log("obteniendo respuesta");
        this.dataSource = new MatTableDataSource(res.data);
        this.notifs = res.data;
        console.log(res.data);
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  }

  addNotif(){
    // this.router.navigate(['/'])
  }

}
