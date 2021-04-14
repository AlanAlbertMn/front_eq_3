import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { AuthService } from '../../services/auth.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {
  displayedColumns: string[] = ['Notificacion'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatTable) table: MatTable<any>;
  array:any;

  notifs:any;

  constructor(private crudService: CrudService, private auth: AuthService) { }

  ngOnInit(): void {
    this.crudService.get_notifications()
    .then(res => {
        console.log("obteniendo respuesta");
        this.notifs = res.data;
        this.notifs = this.notifs.filter(notif => parseInt(notif.tipo_usuario) == this.auth.type);
        this.dataSource = new MatTableDataSource(this.notifs);
        console.log(res.data);
        return res;
      })
      .catch(err => {
        console.log(err);
      });
      
  }

}
