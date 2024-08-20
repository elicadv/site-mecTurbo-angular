import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent /*implements OnInit*/ {
  
  /*whatsappLink: string = ''; // Inicializa com uma string vazia

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<string>('http://localhost:8080/api/whatsapp-link')
      .subscribe(link => this.whatsappLink = link);
  }*/
}


