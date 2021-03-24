import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CrudService } from '../../services/crud.service';

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

  constructor(private crudService: CrudService, private auth: AuthService) { 
    this.crudService.getStadistics(this.body)
      .then(res => {
        console.log("pasa la data papu " + res.data);
        console.log("cargado " + res.data.cargado);
        console.log("validado " + res.data.validado);
        console.log("visto " + res.data.visto);
        console.log("marcado " + res.data.marcado);
        console.log("eliminacion " + res.data.eliminacion);
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
    this.intervalUpdate = setInterval(function(){
      this.showData();
    }.bind(this), 500);
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
