import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-recepcion-menu',
  templateUrl: './recepcion-menu.component.html',
  styleUrls: ['./recepcion-menu.component.css']
})
export class RecepcionMenuComponent implements OnInit {
  number: number;
  name: string;

  constructor(private auth: AuthService) { 
    this.name = this.auth.name;
  }

  ngOnInit(): void {
  }

}
