import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  user = {
    email: "",
    password: ""
  }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes ingresar un valor';
    }

    return this.email.hasError('email') ? 'No es un correo electronico valido' : '';
  }

  constructor(private router: Router, private auth: AuthService) { }

  login(){
    console.log(
      "Email: " + this.user.email.toString(),
      "\nClave: " + this.user.password.toString()
    );
    this.auth.login(this.user.email, this.user.password).then( res => {
      console.log(res);
      this.router.navigate(['/pagina']); 
    });
  }

  ngOnInit(): void {
  }

}
