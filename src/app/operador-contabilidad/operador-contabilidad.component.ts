import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CrudService } from '../../services/crud.service';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import {formatDate} from '@angular/common';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-operador-contabilidad',
  templateUrl: './operador-contabilidad.component.html',
  styleUrls: ['./operador-contabilidad.component.css']
})
export class OperadorContabilidadComponent implements OnInit {
  displayedColumns: string[] = ['Nombre', 'Cliente', 'Tipo', 'Fecha', 'estado', 'Opciones'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatTable) table: MatTable<any>;
  array:any;

  cfilter = false;
  documents = [];
  clients =  [];
  desde = "2010-01-01";
  hasta = formatDate(new Date(), 'yyyy-MM-dd', 'en');

  // Form for status of user
  newform: FormGroup;
  status = [];
  filterValues = {};
  users:any;
  user = {
    id: this.auth.id
  }
  doc = {
    id: 0,
    estado: 0
  }

  constructor(private router: Router, private crudService: CrudService,
    private formBuilder: FormBuilder, private auth: AuthService) { 
      

      this.newform = this.formBuilder.group({
        status: ['']
      });

      of(this.getUserStatus()).subscribe(status => {
        this.status = status;
        this.newform.controls.status.patchValue(this.status[0].id);
      });

      console.log("id del usuario " + this.user.id);
;      this.crudService.getDocsContabilidadbyMaker(this.user)
      .then(res => {
        this.dataSource = new MatTableDataSource(res.data);
        this.documents = res.data;
        console.log("ahi te van los docs");
        console.log(res.data);
        return res;
      })
      .catch(err => {
        console.log(err);
      });

      this.crudService.getClients()
      .then(res => {
        this.users = res.data;
        console.log("ahi te van los clientes");
        console.log(res.data);
        return res;
      })
      .catch(err => {
        console.log(err);
      });




    }

  ngOnInit(): void {
  }

  getUserStatus(){
    return [
      {id: 999, name: 'Todos'},
      {id: 0, name: 'Cargado'},
      {id: 1, name: 'Validado'},
      {id: 2, name: 'Visto por el cliente'},
      {id: 3, name: 'Marcado para eliminacion'}
    ];
  } 

  applyFilter(filterValue: string) {
    console.log(filterValue);
    console.log(this.dataSource.filteredData);
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.table.renderRows();  
  }

  modifyDoc(num: number, status: number){
    console.log("id " + num);
    console.log("estado " + status);
    this.doc.id = num;
    this.doc.estado = status;
    this.crudService.approve_doc(this.doc)
    .then(res => {
      console.log("documento marcado para eliminacion");
      return res;
    })
    .catch(err => {
      console.log(err);
    });
    this.table.renderRows();
  }


}
