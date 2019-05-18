import { Component } from '@angular/core';
import { Estado } from '../entidades/estado';
import { ServicoEstado } from '../servicos/servico.estado'
@Component({
  selector: 'vetores-component'
  ,templateUrl: 'vetores.component.html'
  ,styleUrls: ['vetores.component.css']
})


export class VetoresComponent{
  servico = new ServicoEstado();

  adicionar() : void{
    this.servico.adicionar();
  }
  excluir(i:number) : void{
    this.servico.excluir(i);
  }
  alterar(i:number): void{
    this.servico.alterar(i);
  }
}
