import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AuthService } from '../../services/auth.service';
import { CrudService } from '../../services/crud.service';


@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  name:string;

  constructor(private router: Router, 
    private crudService: CrudService,
    private auth: AuthService) { 
      this.name = this.auth.name;
    }

  ngOnInit(): void {
  }

  goNominas(){
    this.router.navigate(['nominas'])
  }

  goContabilidad(){
    this.router.navigate(['contabilidad'])
  }

  goRH(){
    this.router.navigate(['recursos_humanos'])
  }

  goDocAdicional(){
    this.router.navigate(['documentacion'])
  }

}
