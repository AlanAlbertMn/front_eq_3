import { Component, OnInit, NgZone } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CrudService } from '../../services/crud.service';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-add-notif',
  templateUrl: './add-notif.component.html',
  styleUrls: ['./add-notif.component.css']
})
export class AddNotifComponent implements OnInit {
  // Form for type of user 
  form: FormGroup;
  usertypes = [];
  notif = "";

  not = {
    notificacion: "",
    tipo_usuario: 0, 
    usuario_emisor: this.auth.id
  }

  constructor(private router: Router, private crudService: CrudService,
    private auth: AuthService, private formBuilder: FormBuilder) { 
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
      {id: 999, name: 'Todos'},
      {id: 1, name: 'Cliente'},
      {id: 2, name: 'Operador de Nomina'},
      {id: 3, name: 'Recepción'},
      {id: 4, name: 'Supervisor'},
      {id: 5, name: 'Administrador'}
    ];
  }

  submitUserTypes() { console.log("usuario" + this.form.value.usertypes); }
  submit(){
    console.log("usuario " + this.form.value.usertypes);
    this.not.tipo_usuario = parseInt(this.form.value.usertypes);
    console.log("contenido" + this.notif);
    this.not.notificacion = this.notif;
    console.log("emisor " + this.auth.id);
    
    this.crudService.create_notification(this.not)
      .then(res => {
        console.log(res.data);
        this.router.navigate(['./admin_avisos']);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
