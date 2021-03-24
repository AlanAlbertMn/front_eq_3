import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CrudService } from '../../services/crud.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Chart } from 'chart.js';
import { Label } from 'ng2-charts';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  body = {
    type: false,
    id: 46
  }

  data = [];
  userform: FormGroup;
  users:any;
  /**
 * Interval to update the chart
 * @var {any} intervalUpdate
 */
 private intervalUpdate: any = null;

 /**
 * The ChartJS Object
 * @var {any} chart
 */
  public chart: any = null;

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Cargados', 'Validados', 'Vistos', 'Marcados para Eliminiación', 'Eliminados'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = []; 
  barChartData: ChartDataSets[] = [
    { data: this.data, label: 'Realizados por el usuario 46' }
  ];

  constructor(private crudService: CrudService, private auth: AuthService,
    private formBuilder: FormBuilder) { 
      this.getInfo();

      console.log(this.users);

      this.userform = this.formBuilder.group({
        users: this.users
      });
  }

  changed(value: any){
    console.log("resultado" + value);
    this.body.type = false;
    this.body.id = parseInt(value);
    this.data = [];
    this.getInfo();
    this.barChartData =  [
      { data: this.data, label: 'Realizados por usuario '+ this.body.id }
    ];

  }

  getInfo(){
    this.crudService.getStadistics(this.body)
      .then(res => {
        console.log("pasa la data papu " + res.data);
        console.log("cargado " + res.data.cargado);
        this.data.push(res.data.cargado);

        console.log("validado " + res.data.validado);
        this.data.push(res.data.validado);

        console.log("visto " + res.data.visto);
        this.data.push(res.data.visto);

        console.log("marcado " + res.data.marcado);
        this.data.push(res.data.marcado);

        console.log("eliminacion " + res.data.eliminacion);
        this.data.push(res.data.eliminacion);

        return res;
      })
      .catch(err => {
        console.log(err);
      });
  }

  /**
 * On component initialization
 * @function ngOnInit
 * @return {void}
 */
  ngOnInit(): void {
    this.crudService.getusersByAdmin(this.auth.type)
    .then(res => {
      this.users = res.data;
      console.log("aqui te van los usuarios papu");
      console.log(res.data);
      this.users = this.users.filter(usuario => usuario.tipo_user == 2 || usuario.tipo_user == 4 || usuario.tipo_user == 5);
      console.log("users update" + this.users);
      return res;
    })
    .catch(err => {
      console.log(err);
    });
  }

  byContabilidad(){
    this.body.type = true;
    this.body.id = 1;
    this.data = [];
    this.getInfo();
    this.barChartData =  [
      { data: this.data, label: 'Realizados en Contabilidad' }
    ];
  }

  byRH(){
    this.body.type = true;
    this.body.id = 3;
    this.data = [];
    this.getInfo();
    this.barChartData =  [
      { data: this.data, label: 'Realizados en Recursos Humanos' }
    ];
  }

  byNominas(){
    this.body.type = true;
    this.body.id = 2;
    this.data = [];
    this.getInfo();
    this.barChartData =  [
      { data: this.data, label: 'Realizados en Nominas' }
    ];
  }

  /**
 * On component destroy
 * @function ngOnDestroy
 * @return {void}
 */
 private ngOnDestroy(): void {
  clearInterval(this.intervalUpdate);
 }

 showData(){
  //  console.log(1);
 }

}
