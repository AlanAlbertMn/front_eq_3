import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CrudService } from '../../services/crud.service';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  // Form for type of user 
  form: FormGroup;
  usertypes = [];
  reason = "";
  name = "";
  rfc = "";
  phone = "";
  address = "";
  email = "";
  password="";
  departamentos =[];
  //boolean
  nom: boolean;
  rec: boolean;
  cont: boolean;

  nominas: number;
  recursos: number;
  contabilidad: number;
  id = 0;


  user = {
    name: this.name,
    email: this.email,
    passwd: this.password,
    rfc: this.rfc,
    dom: this.address,
    tel: this.phone,
    userType: 0
  }

  userDept = {
    id: this.id,
    dept : this.departamentos
  }


  constructor(private router: Router, private crudService: CrudService,
    private formBuilder: FormBuilder) { 
      this.form = this.formBuilder.group({
        usertypes: ['']
      });

      of(this.getUserTypes()).subscribe(usertypes => {
        this.usertypes = usertypes;
        this.form.controls.usertypes.patchValue(this.usertypes[0].id);
      });
    }

  ngOnInit(): void {
  }

  getUserTypes(){
    return [
      {id: 1, name: 'Cliente'},
      {id: 2, name: 'Operador de Nomina'},
      {id: 3, name: 'Recepción'},
      {id: 4, name: 'Supervisor'},
      {id: 5, name: 'Administrador'}
    ];
  }

  submitUserTypes() { console.log(this.form.value); }
  input(){
    console.log("razon social tiene valor: " + this.reason);
    console.log("nombre de contacto tiene valor: " + this.name);
    this.user.name = this.name;
    console.log("RFC tiene valor: " + this.rfc);
    this.user.rfc = this.rfc;
    console.log("teléfono tiene valor: " + this.phone);
    this.user.tel = this.phone;
    console.log("domicilio tiene valor: " + this.address);
    this.user.dom = this.address;
    console.log("correo tiene valor: " + this.email);
    this.user.email = this.email;
    console.log("tipo de usuario tiene valor: " + this.form.value);
    this.user.userType = parseInt(this.form.value.usertypes);
    this.user.passwd = "1234";
    this.crudService.addUser(this.user)
    .then(res => {
      console.log("si se pudo");
      console.log(res.data);
      this.id = res.data.id;
      return res;
    })
    .catch(err => {
      console.log(err);
    });

    console.log("nominas tiene valor: " + this.nom);
    if(this.nom){this.nominas = 2; this.departamentos.push(2);}
    console.log("recursos humanos tiene valor: " + this.rec);
    if(this.rec){this.recursos = 3;} this.departamentos.push(3);
    console.log("recursos humanos tiene valor: " + this.cont);
    if(this.cont){this.contabilidad = 1; this.departamentos.push(1);}

    this.crudService.addUserDept(this.userDept)
    .then(res => {
      this.id = res.data.id;
      console.log("si se pudo");
      console.log(res.data);
      return res;
    })
    .catch(err => {
      console.log(err);
    });
  }
}
