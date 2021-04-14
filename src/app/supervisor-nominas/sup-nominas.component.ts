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
  selector: 'app-sup-nominas',
  templateUrl: './sup-nominas.component.html',
  styleUrls: ['./sup-nominas.component.css']
})
export class SupervisorNominasComponent implements OnInit {
  displayedColumns: string[] = ['Nombre', 'Cliente', 'Tipo', 'Periodo', 'estado', 'Opciones'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatTable) table: MatTable<any>;
  array:any;

  cfilter = false;
  documents = [];
  clients =  [];

  estados=[
    'Cargado',
    'Validado',
    'Visto por el cliente',
    'Marcado para eliminacion'
  ];

  // Form for status of user
  newform: FormGroup;
  status = [];
  filterValues = {};

  estado = 999;
  cliente=999;

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
;      this.crudService.getDocsNominabyMaker(this.user)
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

  changed(value:any){
    console.log("nuevo cliente:" + value);
    this.cliente = parseInt(value);
    this.filter();
  }

  filter(){
    this.estado = parseInt(this.newform.value.status);
    console.log("nuevo estado: " + this.estado);

    console.log("nuevo cliente: " + this.cliente);

    this.crudService.getDocsContabilidadbyMaker(this.user)
      .then(res => {
        this.dataSource = new MatTableDataSource(res.data);
        this.documents = res.data;
        console.log("ahi te van los docs");
        console.log(res.data);

        if(this.estado != 999){ this.documents = this.documents.filter(documento => documento.estado === this.estado); console.log("documentos filtraods por estado " + this.estado);}
        if(this.cliente != 999) {this.documents = this.documents.filter(documento => documento.usuario_receptor == this.cliente); }
        return res;
      })
      .catch(err => {
        console.log(err);
      });
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
