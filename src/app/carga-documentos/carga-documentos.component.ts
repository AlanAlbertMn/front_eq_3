import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CrudService } from '../../services/crud.service';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-carga-documentos',
  templateUrl: './carga-documentos.component.html',
  styleUrls: ['./carga-documentos.component.css']
})
export class CargaDocumentosComponent implements OnInit {
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

  constructor(
    private router: Router, 
    private crudService: CrudService,
    private auth: AuthService) { }

  ngOnInit(): void {
  }

  create_document(){
    console.log(this.document);
    console.log(this.date);
    this.crudService.add_document(this.document)
      .then(res => {
        this.document = res.data;
        this.date;
        console.log("Funciona");
        this.router.navigate(['/menu_principal']);
        
      })
      .catch(err => {
        console.log(err);
      });
  }

}
