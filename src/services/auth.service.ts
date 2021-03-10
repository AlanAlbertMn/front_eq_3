import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL: string;
  headers: HttpHeaders;

  constructor(private http: HttpClient) { 
    this.URL = 'http://189.190.147.48:3000/';
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }


  //Log in con usuario ya existente
  login(email: string, password: string) {
    const body = {
      email: email,
      passwd: password
    };
    console.log(body)
    return axios.post(
      this.URL + '/login/',
      body
    );
  }

  //Realizar registro de un nuevo usuario
  registro(username: string,first_name: string, last_name: string, email: string, password: string, re_password: string) {
    const body = {
      username: first_name + last_name,
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      re_password: re_password
    };
    console.log(body)
    return axios.post(
      this.URL + '',
      body
    );
  }
}
