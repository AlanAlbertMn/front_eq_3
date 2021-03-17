import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CrudService } from '../../services/crud.service';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-carga-documentos',
  templateUrl: './carga-documentos.component.html',
  styleUrls: ['./carga-documentos.component.css']
})
export class CargaDocumentosComponent implements OnInit {
  // Form for type of user 
  form: FormGroup;
  usertypes = [];
  // Form for status of user
  newform: FormGroup;
  extensions = [];
  temp = [];

  userform: FormGroup;
  users:any;

  cliente: number;
  extension: string;
  periodo = "";
  user:number;
  usuarios = [];
  dept=[];
  dep = "";
  startDate = new Date(2010, 0, 1);

  date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  document = {
    name: "Prueba file",
    ext: ".ext",
    fecha: this.date, 
    periodo: "2020-12-01", 
    estado: 0,
    isActive: 1, 
    usuario_fk: this.auth.id,
    dept: 1,
    usuario_receptor:0
  }

  constructor(
    private router: Router, private crudService: CrudService,
    private formBuilder: FormBuilder, private auth: AuthService) {

      this.form = this.formBuilder.group({
        dept: ['']
      });

      of(this.getDepartamentos()).subscribe(depart => {
        this.dept = depart;
        this.form.controls.dept.patchValue(this.dept[0].id);
      });

      this.newform = this.formBuilder.group({
        extensions: ['']
      });

      of(this.getExt()).subscribe(status => {
        this.extensions = status;
        this.newform.controls.extensions.patchValue(this.extensions[0].name);
      });

      

      console.log(this.users);

      this.userform = this.formBuilder.group({
        users: this.users
      });

      

     }

  ngOnInit(): void {
    this.crudService.getClients()
    .then(res => {
      this.users = res.data;
      console.log("si se pudo");
      console.log(res.data);
      return res;
    })
    .catch(err => {
      console.log(err);
    });
  }

  getExt(){
    return [
      {id: 999, name: '---SELECCIONA UNA EXTENSION---'},
      {id: 1, name: '.txt'},
      {id: 2, name: '.zip'},
      {id: 3, name: '.pdf'},
      {id: 4, name: '.xlsx'},
      {id: 5, name: '.jpg'}
    ];
  }

  getDepartamentos(){
    return [
      {id: 999, name: '---SELECCIONA UN DEPARTAMENTO---'},
      {id: 1, name: 'Contabilidad'},
      {id: 2, name: 'Nominas'},
      {id: 3, name: 'Recursos Humanos'}
    ];
  }

  changed(value: any){
    console.log("resultado" + value);
    this.cliente = parseInt(value);
  }

  deptchanged(){

    console.log("departamento" + parseInt(this.dep));
  }

  create_document(){
    console.log("departamento: " + this.dep);
    this.document.dept = parseInt(this.dep);
    // console.log("a ver que sale" + this.newform.value.id);
    this.extension = this.newform.value.extensions;
    console.log("nuevo estado:" + this.extension);
    this.document.ext = this.extension;
    this.document.usuario_fk = this.auth.id;
    console.log(this.document);
    this.document.periodo = this.periodo;
    console.log(this.date);
    console.log(this.cliente + "cliente");
    this.document.usuario_receptor = this.cliente;

    this.crudService.add_document(this.document)
      .then(res => {
        this.document = res.data;
        this.date;
        console.log("Funciona");
        this.router.navigate(['/admin_docs']);
        
      })
      .catch(err => {
        console.log(err);
      });
  }

}
