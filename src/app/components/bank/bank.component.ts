import { Component, OnInit } from '@angular/core';
import {Client} from '../../models/Client'
import {ClientService} from '../../services/client.service'

@Component({
  selector: 'app-bank', 
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  
  clients:Client[];

  constructor(private clientService:ClientService) { 
   
  }

  ngOnInit() {
    this.clientService.getClients().subscribe(clients =>{
      this.clients = clients;      
    });
  }}