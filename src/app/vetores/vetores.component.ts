import { Component } from '@angular/core';

@Component({
  selector: 'vetores-component'
  ,templateUrl: 'vetores.component.html'
  ,styleUrls: ['vetores.component.css']
})


export class VetoresComponent{
  nomes= new Array<string>();

  nome : string='';


  constructor(){
  }

  adicionar() : void{
    if (this.nome != '') {

      this.nomes.push(this.nome);
      this.nome= '';
    }

  }

  excluir(i:number) : void{
    this.nomes.splice(i,1);
  }

  alterar(i:number): void{
    this.nome = this.nomes[i];
    this.nomes.splice(i,1);

  }
}
