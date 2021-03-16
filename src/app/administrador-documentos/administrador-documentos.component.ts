import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CrudService } from '../../services/crud.service';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-administrador-documentos',
  templateUrl: './administrador-documentos.component.html',
  styleUrls: ['./administrador-documentos.component.css']
})
export class AdministradorDocumentosComponent implements OnInit {
  estado: number;
  cliente: number;

  cfilter = false;
  documents = [];
  clients =  [];
  desde = "2010-01-01";
  hasta = formatDate(new Date(), 'yyyy-MM-dd', 'en');

  // Form for type of user 
  form: FormGroup;
  usertypes = [];
  // Form for status of user
  newform: FormGroup;
  status = [];
  

  date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  document = {
    name: "Prueba file",
    ext: ".ext",
    fecha: this.date, 
    periodo: "2020-12-01", 
    estado: 0,
    isActive: false, 
    usuario_fk: 1,
    dept:"100"
  }

  constructor(private router: Router, private crudService: CrudService,
    private formBuilder: FormBuilder) { 
      this.form = this.formBuilder.group({
        usertypes: ['']
      });

      of(this.getClients()).subscribe(usertypes => {
        this.usertypes = usertypes;
        this.form.controls.usertypes.patchValue(this.usertypes[0].id);
      });

      this.newform = this.formBuilder.group({
        status: ['']
      });

      of(this.getUserStatus()).subscribe(status => {
        this.status = status;
        this.newform.controls.status.patchValue(this.status[0].id);
      });

    }

  ngOnInit(): void {
    this.crudService.getdocs_admin(false, this.date, this.date)
      .then(res => {
        this.documents = res.data;
        console.log("si se pudo");
        console.log(res.data);
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  }

  getClients(){
    return [
      {id: 999, name: 'Todos'},
      {id: 1, name: 'Cliente'},
      {id: 2, name: 'Operador de Nomina'},
      {id: 3, name: 'Administrador'},
      {id: 4, name: 'Supervisor'}
    ];
  }

  getUserStatus(){
    return [
      {id: 3, name: 'Todos'},
      {id: 0, name: 'Cargado'},
      {id: 1, name: 'Validado'}
    ];
  } 

  filter(){
    if(this.desde != "2010-01-01" || this.hasta != formatDate(new Date(), 'yyyy-MM-dd', 'en')){
      this.cfilter = true;
      console.log("filter by date");
    }
    console.log("desde fecha" + this.desde);
    console.log("hasta fecha" + this.hasta);
    this.estado = parseInt(this.newform.value.status);
    console.log("nuevo estado:" + this.estado);
    this.cliente = this.form.value.usertypes;
    console.log("nuevo cliente:" + this.cliente);
    this.crudService.getdocs_admin(this.cfilter, this.desde, this.hasta)
    .then(res => {
      this.documents = res.data;
      console.log("si se pudo");
      console.log(res.data);
      return res;
    })
    .catch(err => {
      console.log(err);
    });
    if(this.estado == 3 && this.cliente == 999){}
    else if(this.estado == 3) {this.documents = this.documents.filter(document => document.usuario_emisor == this.cliente); }
    else if(this.cliente == 999) { this.documents = this.documents.filter(document => document.estado == this.estado);}
    else {
      this.documents = this.documents.filter(document => document.estado == this.estado && document.usuario_emisor == this.cliente);
    }
    console.log("documents update" + this.documents);
  }

  goToAdminMenu(){
    this.router.navigate(['./admin_menu']);
  }

}
