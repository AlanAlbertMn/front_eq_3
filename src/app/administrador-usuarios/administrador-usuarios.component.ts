import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CrudService } from '../../services/crud.service';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';

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

  constructor(private router: Router, private crudService: CrudService,
    private formBuilder: FormBuilder, private auth: AuthService) {
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


  ngOnInit(): void {
    console.log(this.auth.type);
    this.crudService.getusersByAdmin(this.auth.type)
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
      console.log("si se pudo");
      console.log(res.data);
      return res;
    })
    .catch(err => {
      console.log(err);
    });
    if(this.estado == 3 && this.cliente == 999){console.log("sin filtros mamacita " + this.users);}
    else if(this.estado == 3) {this.users = this.users.filter(usuario => usuario.tipo_user == 3); }
    else if(this.cliente == 999) { this.users = this.users.filter(usuario => usuario.isActive == this.estado);}
    else {
      this.users = this.users.filter(usuario => usuario.isActive == this.estado && usuario.tipo_user == this.cliente);
    }
    console.log("users update" + this.users);
  }



  goToAdminMenu(){
    this.router.navigate(['./admin_menu']);
  }

}
