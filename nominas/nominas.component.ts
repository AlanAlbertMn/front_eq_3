import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nominas',
  templateUrl: './nominas.component.html',
  styleUrls: ['./nominas.component.css']
})
export class NominasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goNominaYear(){
    this.router.navigate(['nominayear'])
  } 

}
