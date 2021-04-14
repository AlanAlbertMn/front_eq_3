import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  pass = new FormControl('');
  dept = [];
  user = {
    // id: 0,
    // name: "",
    email: "",
    password: ""
    // status: "",
    // type: 0,
    // dept: []  
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
      "\nContrasenia: " + this.user.password.toString()
    );
    this.auth.login(this.user.email, this.user.password).then( res => {
      console.log("res:" + res.data.dept);
      this.auth.id = res.data.id;
      this.auth.name = res.data.name;
      this.auth.dept = res.data.dept;
      this.auth.type = res.data.type;
      console.log("user id: " + this.auth.id +
      "\n user name: " + this.auth.name 
      + "\n type of user: " + this.auth.type
      + "\n dept: " + this.auth.dept);

      this.auth.dept.forEach(element => {
        this.dept.push(element.department);
      });
      this.auth.depart = this.dept;
      console.log(this.auth.depart); 

      switch(this.auth.type){
        case 1: {
          this.router.navigate(['./menu_principal']); 
          break;
        }
        case 2: {
          this.router.navigate(['./op_menu']); 
          break;
        }
        case 3: {
          this.router.navigate(['./rec_menu']); 
          break;
        }
        case 4: {
          this.router.navigate(['./sup_menu']); 
          break;
        }
        case 5: {
          this.router.navigate(['./admin_menu']); 
        }
      }
      
    });
  }

  ngOnInit(): void {
  }

}
