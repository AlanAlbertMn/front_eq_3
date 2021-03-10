import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  URL: string;
  headers: HttpHeaders;

  constructor(
    private auth: AuthService, 
    private http: HttpClient) { 
      this.URL = 'http://189.190.147.48:3000/';

    }

  getdocs_admin(){
    let url = this.URL + 'getdocsadmin/';
    return axios.get(url, {
      headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });
  }

  get_doc(body){
    let url = this.URL + 'adddocument/';
    console.log("pasame el pack papu" + body);
    return axios.post(url,body,{
      headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });
  }

  get_notifications(){
    let url = this.URL + 'getnotif/';
    return axios.get(url, {
      headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });
  }

  add_document(body){
    let url = this.URL + 'adddocument/';
    console.log(body);
    return axios.post(url,body,{
      headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });
  }

  approve_doc(body){
    let url = this.URL + 'approvedoc/';
    console.log("aqui tienes el body papu " + body);
    return axios.put(url, body, {headers:{'Content-Type': 'application/json'}});
  }
  
  delete_doc(value){
    let url = this.URL + 'deletedoc/';
    console.log("borra este doc papu " + value);
    let config = { 
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: { //! Take note of the `data` keyword. This is the request body.
          id: value
      }
    }
    axios.delete(url, config);
  }

  getdocsByUser(body){
    let url = this.URL + 'adddocument/';
    console.log("aqui te van los docs papu" + body);
    return axios.post(url,body,{
      headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });
  }

  create_notification(body){
    let url = this.URL + 'addnotif/';
    console.log("aqui te va un anuncio papu" + body);
    return axios.post(url,body,{
      headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });
  }

  get_nomina(body){
    let url = this.URL + 'getnomina/';
    console.log("aqui te va un notificacion papu" + body);
    return axios.post(url,body,{
      headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });
  }

  getDocs_contabilidad(body){
    let url = this.URL + 'getcontabilidad/';
    console.log("aqui te van los docs papu" + body);
    return axios.post(url,body,{
      headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });
  }

  getDocs_recursosHumanos(body){
    let url = this.URL + 'getrh/';
    console.log("aqui te van los docs papu" + body);
    return axios.post(url,body,{
      headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });
  }




}
