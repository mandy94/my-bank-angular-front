import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Client} from '../models/Client'

@Injectable({
  providedIn: 'root'
})


export class ClientService {

  url = 'http://localhost:8080/api/client/all';

  constructor(private http:HttpClient) {
  }

  getClients():Observable<Client[]>{
    return this.http.get<Client[]>(this.url);
  }
}
