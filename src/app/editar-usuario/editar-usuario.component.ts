
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  dept = [];
  tipo:number;
  
  user = {
    id: 0, 
    nombre: "",
    email: "",
    passwd: "", 
    rfc: "",
    domicilio: "", 
    telefono: "",
    isActive: 0, 
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

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern((/^[a-zA-Z]*$/))]),
    phone: new FormControl('', [Validators.required, Validators.pattern((/^((\\+91-?)|0)?[0-9]{10}$/))]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    rfc: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    id: new FormControl('', [Validators.required])
  });

  hide = true;
  hideconfirm = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
 
    ngOnInit():void{
      this.user.id = this.data.id;
      this.user.nombre = this.data.name;
      this.user.email = this.data.email;
      this.user.isActive = this.data.status;
      this.user.domicilio = this.data.address;
      this.user.telefono = this.data.phone;
      this.user.passwd = this.data.pass; 
      this.tipo = this.data.tipo;
    }

    sendDialog() {
      console.log("send clicked");
      // this.dialogRef.close(this.user);
    }

}
