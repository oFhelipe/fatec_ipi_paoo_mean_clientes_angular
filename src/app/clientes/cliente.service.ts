import { Cliente } from './cliente.model';
import { Subject } from 'rxjs';

export class ClienteService {
  private clientes: Cliente[] = [];
  private listaCLientesAtualizada = new Subject<Cliente[]>();
  getClientes(): Cliente[] {
    return [...this.clientes];
  }
  adicionarCliente(nome: string, fone: string, email: string) {
    const cliente: Cliente = {
      nome,
      fone,
      email,
    };
    this.clientes.push(cliente);
    this.listaCLientesAtualizada.next([...this.clientes]);
  }

  getListaDeClientesAtualizadaObservable() {
    return this.listaCLientesAtualizada.asObservable();
  }

}
