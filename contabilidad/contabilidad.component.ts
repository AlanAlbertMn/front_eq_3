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
  displayedColumns: string[] = ['Nombre', 'Periodo', 'Tipo', 'Fecha', 'estado', 'Opciones'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatTable) table: MatTable<any>;
  filterSelectObj:any;
  documents = [];
  desde="2020-01-01";
  hasta=formatDate(new Date(), 'yyyy-MM-dd', 'en');


  date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  format = {
    id: this.auth.id,
    dept: 1
  }

  constructor(private router: Router, 
    private crudService: CrudService,
    private auth: AuthService) { }

  ngOnInit(): void {

    this.crudService.getdocsByUser(this.format)
      .then(res => {
        this.dataSource = new MatTableDataSource(res.data);
        this.documents = res.data;
        console.log("si se pudo");
        console.log(res.data)
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

}
