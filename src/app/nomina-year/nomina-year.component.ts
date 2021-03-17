import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-nomina-year',
  templateUrl: './nomina-year.component.html',
  styleUrls: ['./nomina-year.component.css']
})
export class NominaYearComponent implements OnInit {

  nomina = {
    id: 1
  }

  constructor(private crudService: CrudService) { 
    this.get_nomina();
  }

  ngOnInit(): void {
  }

  get_nomina(){
    console.log(this.nomina);
    // this.crudService.get_nomina(this.nomina)
    //   .then(res => {
    //     this.nomina = res.data;
    //     console.log("Funciona");
    //     console.log(this.nomina);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
  

}
