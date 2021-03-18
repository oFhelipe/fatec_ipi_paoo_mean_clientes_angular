import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service'
@Component({
  selector: 'app-cliente-inserir',
  templateUrl: "./cliente-inserir.component.html",
  styleUrls: ["./cliente-inserir.component.css"]
})
export class ClienteInserirComponent{

  constructor(private clienteService: ClienteService) {}

  onAdicionarCliente(form: NgForm){
    //console.log("Adicionando cliente...");
    console.log(form);
    const cliente: Cliente ={
      nome: form.value.nome,
      fone: form.value.fone,
      email: form.value.email
    };
    if (!form.valid) {
      return;
    }
    this.clienteService.adicionarCliente(cliente.nome, cliente.fone, cliente.email);
    form.resetForm();
  }
}
