import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CrudService } from '../../services/crud.service';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css']
})
export class SupervisorComponent implements OnInit {
  // Form for type of user 
  form: FormGroup;
  usertypes = [];
  // Form for status of user
  newform: FormGroup;
  status = [];
  // Form for status of user
  stateform: FormGroup;
  statetypes = [];

  constructor(private router: Router, private crudService: CrudService,
    private formBuilder: FormBuilder) {
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

      this.stateform = this.formBuilder.group({
        statetypes: ['']
      });

      of(this.getUserState()).subscribe(status => {
        this.statetypes = this.statetypes;
        this.newform.controls.statetypes.patchValue(this.statetypes[0].id);
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
  }

  getUserTypes(){
    return [
      {id: 1, name: 'Cliente'},
      {id: 2, name: 'Operador de Nomina'},
      {id: 3, name: 'Administrador'},
      {id: 4, name: 'Supervisor'}
    ];
  }

  getUserStatus(){
    return [
      {id: 1, name: 'Activo'},
      {id: 2, name: 'No Activo'}
    ];
  }

  getUserState(){
    return [
      {id: 1, name: 'Activado'},
      {id: 2, name: 'Revisado'}
    ];
  }

  submitUserTypes() { console.log(this.form.value); }

  submitUserStatus() { console.log(this.newform.value); }

  submitUserState() { console.log(this.stateform.value); }

  goToAdminMenu(){
    this.router.navigate(['./supervisor']);
  }

}

