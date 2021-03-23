import {
  AfterViewInit, 
  Component, 
  ViewChild, 
  OnInit, 
  Output,
  EventEmitter,
  Inject} from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CrudService } from '../../services/crud.service';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import {formatDate} from '@angular/common';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {
  MatDialog,
  MatDialogRef, 
  MatDialogConfig,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';


@Component({
  selector: 'app-administrador-usuarios',
  templateUrl: './administrador-usuarios.component.html',
  styleUrls: ['./administrador-usuarios.component.css']
})
export class AdministradorUsuariosComponent implements OnInit {
  // Form for type of user 
  form: FormGroup;
  usertypes = [];
  // Form for status of user
  newform: FormGroup;
  status = [];
  users = [];
  estado: number;
  cliente: number;

  usuario = {
    id: 0,
    name: "",
    email: "",
    type: 0,
    estado: 0,
    address:"",
    phone: ""
  }

  displayedColumns: string[] = ['Nombre', 'Correo', 'Tipo', 'Estado', 'Opciones'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatTable) table: MatTable<any>;



  constructor(private router: Router, private crudService: CrudService,
    private formBuilder: FormBuilder, private auth: AuthService,
    private dialog: MatDialog) {
      this.form = this.formBuilder.group({
        usertypes: ['']
      });

      of(this.getUserTypes()).subscribe(usertypes => {
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
  // name, email, passwd, rfc, dom, dept, tel, userType}
  user = {
    name: "",
    email: "",
    passwd: "", 
    rfc: 3,
    dept: [1,2], 
    cel: 122334,
    userType: 1, 
  }

  tipos = [
    '',
    'Cliente',
    'Operador de Nomina',
    'Recepcion',
    'Supervisor',
    'Administrador'
  ];

  estados = [
    'Inactivo',
    'Activo'
  ];  

  ngOnInit(): void {
    console.log(this.auth.type);
    this.crudService.getusersByAdmin(this.auth.type)
      .then(res => {
        this.dataSource = new MatTableDataSource(res.data);
        this.users = res.data;
        console.log("si se pudo");
        console.log(res.data);
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  }

  getUserTypes(){
    return [
      {id: 999, name: 'Todos'},
      {id: 1, name: 'Cliente'},
      {id: 2, name: 'Operador de Nomina'},
      {id: 3, name: 'Recepcion'},
      {id: 4, name: 'Supervisor'},
      {id: 5, name: 'Administrador'}
    ];
  }

  getUserStatus(){
    return [
      {id: 3, name: 'Todos'},
      {id: 1, name: 'Activo'},
      {id: 0, name: 'No Activo'}
    ];
  }

  submitUserTypes() { console.log(this.form.value); }

  submitUserStatus() { console.log(this.newform.value); }

  filter(){
    // console.log("a ver que sale" + this.newform.value.id);
    this.estado = parseInt(this.newform.value.status);
    console.log("nuevo estado:" + this.estado);
    this.cliente = this.form.value.usertypes;
    console.log("nuevo cliente:" + this.cliente);

    this.crudService.getusersByAdmin(this.auth.type)
    .then(res => {
      this.users = res.data;
      console.log("aqui te van los usuarios papu");
      console.log(res.data);

      if(this.estado == 3 && this.cliente == 999){console.log("sin filtros mamacita " + this.users);}
      if(this.cliente != 999) {this.users = this.users.filter(usuario => usuario.tipo_user == this.cliente); }
      if(this.estado != 3) { this.users = this.users.filter(usuario => usuario.isActive == this.estado);}
      return res;
    })
    .catch(err => {
      console.log(err);
    });
    
    // else {
    //   this.users = this.users.filter(usuario => usuario.isActive == this.estado && usuario.tipo_user == this.cliente);
    // }
    console.log("users update" + this.users);
    this.dataSource = new MatTableDataSource(this.users);
  }

  visualizar(usuar: any){
    this.usuario.id = usuar.id;
    this.usuario.name = usuar.nombre;
    this.usuario.type = usuar.tipo_user;
    this.usuario.email = usuar.correo;
    this.usuario.estado = usuar.isActive;
    this.usuario.address = usuar.domicilio;
    this.usuario.phone = usuar.telefono;

    console.log("usuario id: " + usuar.id 
    + ", nombre " + usuar.nombre 
    + ", tipo " + usuar.tipo_user
    + ", correo " + usuar.correo
    +  ", telefono " + usuar.telefono
    );
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      data: {
        id: this.usuario.id,
        name: this.usuario.name,
        tipo: this.usuario.type,
        email: this.usuario.email,
        phone: this.usuario.phone,
        address: this.usuario.address,
        status: this.usuario.estado
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(' here is the result ' + result );
    })
    // const dialogConfig = new MatDialogConfig();
    // this.matDialog.open(DialogBodyComponent, dialogConfig);
  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {
  nombre:string;
  id: number;
  type: number;
  email: string;
  cel: string;
  address: string;
  status: number;
  tipos = [
    '',
    'Cliente',
    'Operador de Nomina',
    'Recepcion',
    'Supervisor',
    'Administrador'
  ];
  estados = [
    'Inactivo',
    'Activo'
  ];

  @Output() submitClicked = new EventEmitter<any>();
  
  constructor( public dialogRef: MatDialogRef<DialogContentExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any){}

    ngOnInit(){
      this.id = this.data.id;
      this.nombre = this.data.name;
      this.type = this.data.tipo;
      this.email = this.data.email;
      this.cel = this.data.phone;
      this.address = this.data.address;
      this.status = this.data.status;
    }

  closeDialog() {
    console.log("close clicked");
    this.dialogRef.close();
  }

}
