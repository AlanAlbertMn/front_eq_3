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
  selector: 'app-contabilidad',
  templateUrl: './contabilidad.component.html',
  styleUrls: ['./contabilidad.component.css']
})
export class ContabilidadComponent implements OnInit {
  displayedColumns: string[] = ['Nombre','Tipo', 'Fecha', 'estado', 'Opciones'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatTable) table: MatTable<any>;
  filterSelectObj:any;
  documents = [];
  desde="2010-01-01";
  hasta=formatDate(new Date(), 'yyyy-MM-dd', 'en');

  states=[
    'Cargado',
    'Validado',
    'Visto por el cliente',
    'Marcado para eliminacion'
  ];
  
  date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  format = {
    id: this.auth.id,
    dept: 1
  }

  doc = {
    id: 0,
    name: "",
    ext: "",
    periodo: "",
    estado: 2,
    isActive: 1,
    dept: 1,
    usuario_receptor: this.auth.id
  }

  log = {
    /*action that is made*/
    desc: 2,
    /* user id */
    id: this.auth.id,
    /* doc id */
    doc: 0
  }

  constructor(private router: Router, 
    private crudService: CrudService,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(){
    this.crudService.getdocsByUser(this.format)
      .then(res => {
        this.dataSource = new MatTableDataSource(res.data);
        this.documents = res.data;
        console.log("obteniendo información ");
        this.documents = this.documents.filter(doc => 
          formatDate(doc.periodo_info, 'yyyy-MM-dd', 'en') >= this.desde
          && doc.periodo_info <= this.hasta
          );
        console.log("documentos iniciando en " + this.desde + " hasta " + this.hasta);
      })
      .catch(err => {
        console.log(err);
      });
  }

  filter(){
    this.desde = formatDate(this.desde, 'yyyy-MM-dd', 'en');
    console.log("desde fecha" + this.desde);

    this.hasta = formatDate(this.hasta, 'yyyy-MM-dd', 'en');
    console.log("hasta fecha" + this.hasta);

    this.getInfo();
  }

  seen(document: any){
    if (document.estado > 2){
      console.log("sin cambios");
    }
    else{
      this.doc.id = document.id_documentos;
      console.log("id: " + document.id_documentos);
      this.log.doc = document.id_documentos;

      this.doc.name = document.nombre_doc;
      console.log("name: " + document.nombre_doc);

      this.doc.ext = document.ext_archivo;
      console.log("ext: " + document.ext_archivo);

      this.doc.periodo = formatDate(document.periodo_info, 'yyyy-MM-dd', 'en'); ;
      console.log("periodo: " + this.doc.periodo);

      this.doc.estado = 2;
      console.log("estado: " + this.doc.estado);

      this.crudService.updateDoc(this.doc)
      .then(res => {
        console.log("documento visto ");
        this.getInfo();
        
        // return res;
      })
      .catch(err => {
        console.log(err);
      });
      this.newAction();
    }
  }

  newAction(){
    this.crudService.addLog(this.log)
    .then(res => {
      console.log("log creado");
      return res;
    })
    .catch(err => {
      console.log(err);
    });
  }

}
