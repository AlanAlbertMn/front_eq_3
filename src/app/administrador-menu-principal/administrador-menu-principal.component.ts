import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-administrador-menu-principal',
  templateUrl: './administrador-menu-principal.component.html',
  styleUrls: ['./administrador-menu-principal.component.css']
})
export class AdministradorMenuPrincipalComponent implements OnInit {
  number: number;

  constructor(private router: Router) { }

  ngOnInit(): void {  
  }

  goToUsers(){
    this.router.navigate(['/admin_users']);
  }

}
