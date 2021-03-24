import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CrudService } from '../../services/crud.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-recep-add-usuario',
  templateUrl: './recep-add-usuario.component.html',
  styleUrls: ['./recep-add-usuario.component.css']
})
export class RecepAddUsuarioComponent implements OnInit {
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
  array: any;
  //boolean
  nom: boolean;
  rec: boolean;
  cont: boolean;

  nominas: number;
  recursos: number;
  contabilidad: number;
  id : number;


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
    id : 1,
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

  async input(){
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

    console.log("nominas tiene valor: " + this.nom);
    if(this.nom){this.nominas = 2; this.departamentos.push(2);}
    console.log("recursos humanos tiene valor: " + this.rec);
    if(this.rec){this.recursos = 3; this.departamentos.push(3)};
    console.log("contabilidad tiene valor: " + this.cont);
    if(this.cont){this.contabilidad = 1; this.departamentos.push(1);}
    console.log("departamentos " + this.userDept.dept);
    this.userDept.dept = this.departamentos;


    const remoteData = await this.crudService.addUser(this.user);
    console.log("data regresada" + JSON.stringify(remoteData.data));

    this.userDept.id = remoteData.data.idInserted;
    console.log("id de usuario creado" + this.userDept.id);  
    // this.userDept.id = this.id;
    this.crudService.addUserDept(this.userDept)
    .then(result => {
      console.log("aqui te mando un usuario papu");
      console.log(result.data);
      return result;
    })
    .catch(error => {
      console.log(error);
    });

    this.router.navigate(['/rec_users']);
  }

}
