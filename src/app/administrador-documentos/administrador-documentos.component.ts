import {
  Component, 
  ViewChild, 
  OnInit, 
  Inject} from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CrudService } from '../../services/crud.service';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import {formatDate} from '@angular/common';

import {
  MatDialog,
  MatDialogRef, 
  MatDialogConfig,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import {MatSort} from '@angular/material/sort';
import {
  MatTable, 
  MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-administrador-documentos',
  templateUrl: './administrador-documentos.component.html',
  styleUrls: ['./administrador-documentos.component.css']
})
export class AdministradorDocumentosComponent implements OnInit  {
  displayedColumns: string[] = ['Nombre', 'Cliente', 'Tipo', 'Fecha', 'Periodo', 'estado', 'Opciones'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatSort) sort: MatSort;
  array:any;

  estado=999;
  cliente=999;

  cfilter = false;
  documents = [];
  clients =  [];
  desde = "2021/01/01";
  hasta = formatDate(new Date(), 'yyyy/MM/dd', 'en');

  // Form for type of user 
  form: FormGroup;
  usertypes = [];
  // Form for status of user
  newform: FormGroup;
  status = [];
  filterValues = {};
  users:any;
  estados=[
    {id: 999, name: 'Todos'},
    {id: 0, name: 'Cargado'},
    {id: 1, name: 'Validado'},
    {id: 2, name: 'Visto por el cliente'},
    {id: 3, name: 'Marcado para eliminacion'}
  ];
  

  date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  doc = {
    id: 0,
    estado: 0
  }
  document = {
    name: "Prueba file",
    ext: ".ext",
    fecha: this.date, 
    periodo: "2020-12-01", 
    estado: 0,
    isActive: false, 
    usuario_fk: 1,
    dept:"100",
    usuario_receptor: 0
  }

  filters = {
    filter: this.cfilter,
    date_init: this.desde,
    date_limit: this.hasta
  }

  
  constructor(private router: Router, private crudService: CrudService,
    private formBuilder: FormBuilder, public dialog: MatDialog) { 

      // this.form = this.formBuilder.group({
      //   usertypes: ['']
      // });

      // of(this.getClients()).subscribe(usertypes => {
      //   this.usertypes = usertypes;
      //   this.form.controls.usertypes.patchValue(this.usertypes[0].id);
      // });

      this.newform = this.formBuilder.group({
        status: ['']
      });

      of(this.getUserStatus()).subscribe(status => {
        this.status = status;
        this.newform.controls.status.patchValue(this.status[0].id);
      });

      this.crudService.getdocs_admin(this.filters)
      .then(res => {
        this.dataSource = new MatTableDataSource(res.data);
        this.documents = res.data;
        console.log("obteniendo data");
        console.log(res.data);
        return res;
      })
      .catch(err => {
        console.log(err);
      });

      this.crudService.getClients()
      .then(res => {
        this.users = res.data;
        console.log("obteniendo clientes...");
        console.log(res.data);
        return res;
      })
      .catch(err => {
        console.log(err);
      });

    }

  ngOnInit(): void {
      // this.getData(this.dataSource);      
  }

  // getClients(){
  //   return [
  //     {id: 999, name: 'Todos'},
  //     {id: 1, name: 'Cliente'},
  //     {id: 2, name: 'Operador de Nomina'},
  //     {id: 3, name: 'Administrador'},
  //     {id: 4, name: 'Supervisor'}
  //   ];
  // }

  getUserStatus(){
    return [
      {id: 999, name: 'Todos'},
      {id: 0, name: 'Cargado'},
      {id: 1, name: 'Validado'},
      {id: 2, name: 'Visto por el cliente'},
      {id: 3, name: 'Marcado para eliminacion'}
    ];
  } 

  approveDoc(num: number, status: number){
    console.log("id " + num);
    console.log("estado " + status);
    this.doc.id = num;
    this.doc.estado = status;
    this.crudService.approve_doc(this.doc)
    .then(res => {
      console.log("documento aprovado");
      return res;
    })
    .catch(err => {
      console.log(err);
    });
    this.filter();
  }

  changed(value:any){
    console.log("nuevo cliente:" + value);
    this.cliente = parseInt(value);
    this.filter();
  }

  filter(){
    if(this.desde != "2021/01/01" || this.hasta != formatDate(new Date(), 'yyyy/MM/dd', 'en')){
      this.cfilter = true;
      this.filters.filter = this.cfilter;
      console.log("filter by date");
    }
    this.desde = formatDate(this.desde, 'yyyy/MM/dd', 'en');
    console.log("desde fecha" + this.desde);
    this.filters.date_init = this.desde;

    this.hasta = formatDate(this.hasta, 'yyyy/MM/dd', 'en');
    console.log("hasta fecha" + this.hasta);
    this.filters.date_limit = this.hasta;

    this.estado = parseInt(this.newform.value.status);
    console.log("nuevo estado:" + this.estado);
    // this.cliente = this.form.value.usertypes;
    console.log("nuevo cliente:" + this.cliente);

    this.crudService.getdocs_admin(this.filters)
    .then(res => {
      this.documents = res.data;
      console.log("nueva información");
      console.log(res.data);
      if(this.estado == 999 && this.cliente == 999){console.log("sin filtros");}
      if(this.estado != 999){ this.documents = this.documents.filter(documento => documento.estado === this.estado); console.log("documentos filtraods por estado " + this.estado);}
      if(this.cliente != 999) {this.documents = this.documents.filter(documento => documento.usuario_receptor == this.cliente); }
      // if(this.estado != 999 && this.cliente != 999) {
      //   this.documents = this.documents.filter(documento => documento.estado == this.estado && documento.usuario_receptor == this.cliente);
      // }
      console.log("documents update" + this.documents);
      this.dataSource = new MatTableDataSource(this.documents);
      return res;
    })
    .catch(err => {
      console.log(err);
    });
  }

  deleteDocument(id_value: any, index: any) {
    console.log("documento con id " + id_value + " eliminado");
    
    this.crudService.delete_doc(parseInt(id_value))
    .then(res => {
        console.log("obteniendo respuesta");
        console.log(res.data);
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  }

}


// @Component({
//   selector: 'dialog-content-example-dialog',
//   templateUrl: 'dialog-content-example-dialog.html',
// })
// export class DialogContentExampleDialog {
  
//   constructor( public dialogRef: MatDialogRef<DialogContentExampleDialog>){}

//   close(){
//     this.dialogRef.close("Thanks for using me!");
//     console.log("cuadro cerrado");

//   }

// }