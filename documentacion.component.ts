import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentacion',
  templateUrl: './documentacion.component.html',
  styleUrls: ['./documentacion.component.css']
})
export class DocumentacionComponent implements OnInit {
  date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  document = {
    name: "Documentacion Adicional.zip",
    ext: ".zip",
    fecha: this.date, 
    periodo: "2001-12-01", 
    estado: 0,
    isActive: false, 
    usuario_fk: 1,
    dept:"100"
  }

  user = {
    id: 1,
    dept: "001"
  }
  constructor(private router: Router, 
    private crudService: CrudService,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.crudService.getDocs_recursosHumanos(this.user)
      .then(res => {
        this.document = res.data;
        console.log("si se pudo");
        console.log(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  }
}
