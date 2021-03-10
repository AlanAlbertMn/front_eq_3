import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CrudService } from '../../services/crud.service';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-contabilidad',
  templateUrl: './contabilidad.component.html',
  styleUrls: ['./contabilidad.component.css']
})
export class ContabilidadComponent implements OnInit {

  date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  document = {
    name: "Prueba file.ext",
    ext: ".ext",
    fecha: this.date, 
    periodo: "2020-12-01", 
    estado: 0,
    isActive: false, 
    usuario_fk: 1,
    dept:"100"
  }

  user = {
    id: 1,
    dept: "001"
  }

  constructor(private router: Router, 
    private crudService: CrudService,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.crudService.getDocs_contabilidad(this.user)
      .then(res => {
        this.document = res.data;
        console.log("si se pudo");
        console.log(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  }

}
