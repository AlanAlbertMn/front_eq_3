import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CrudService } from '../../services/crud.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatTable} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-recepcion-avisos',
  templateUrl: './recepcion-avisos.component.html',
  styleUrls: ['./recepcion-avisos.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class RecepcionAvisosComponent implements OnInit {
  displayedColumns: string[] = ['Nombre', 'Usuario'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatTable) table: MatTable<any>;
  array:any;

  expandedElement: any | null;

  type=999;
  notifs = [];
  tipos = [
    '',
    'Cliente',
    'Operador de Nomina',
    'Recepcion',
    'Supervisor',
    'Administrador'
  ];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.get_notifications()
    .then(res => {
        console.log("obteniendo respuesta");
        this.dataSource = new MatTableDataSource(res.data);
        this.notifs = res.data;
        console.log(res.data);
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  }

}
