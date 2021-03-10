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
    let url = this.URL + '/getdocsadmin/';
    return axios.get(url, {
      headers:{
        'Content-Type': 'application/json',
      }
    });
  }

  get_notifications(){
    let url = this.URL + '/getnotif/';
    return axios.get(url, {
      headers:{
        'Content-Type': 'application/json',
      }
    });
  }

  add_document(body){
    let url = this.URL + '/adddocument/';
    console.log(body);
    return axios.post(url,body,{
      headers:{
        'Content-Type': 'application/json',
      }
    });
  }

  approve_doc(body){
    let url = this.URL + '/approvedoc/';
    console.log("aqui tienes el body papu " + body);
    return axios.put(url, body, {headers:{'Content-Type': 'application/json'}});
  }
  
  delete_doc(value){
    let url = this.URL + '/deletedoc/';
    console.log("borra este doc papu " + value);
    let config = { 
      headers: {
        'Content-Type': 'application/json'
      },
      body: { //! Take note of the `data` keyword. This is the request body.
          id: value
      }
    }
    axios.delete(url, config);
  }

  getdocsByUser(body){
    let url = this.URL + '/adddocument/';
    console.log(body);
    return axios.post(url,body,{
      headers:{
        'Content-Type': 'application/json',
      }
    });
  }


}
