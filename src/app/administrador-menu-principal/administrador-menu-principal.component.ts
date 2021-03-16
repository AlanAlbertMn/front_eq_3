import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AuthService } from '../../services/auth.service';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-administrador-menu-principal',
  templateUrl: './administrador-menu-principal.component.html',
  styleUrls: ['./administrador-menu-principal.component.css']
})
export class AdministradorMenuPrincipalComponent implements OnInit {
  number: number;
  name: string;


  constructor(private router: Router, 
    private crudService: CrudService,
    private auth: AuthService) { 
      this.name = this.auth.name;
    }

  ngOnInit(): void {  
  }

  goToUsers(){
    this.router.navigate(['/admin_users']);
  }

}
