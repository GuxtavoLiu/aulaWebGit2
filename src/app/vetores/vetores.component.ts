import { Component } from '@angular/core';

@Component({
  selector: 'vetores-component'
  ,templateUrl: 'vetores.component.html'
  ,styleUrls: ['vetores.component.css']
})


export class VetoresComponent{
  nomes: string[] = ['Marcos', 'Maria', 'Joaquina'];
  nome : string='';


  constructor(){
  }

  adicionar() : void{
    this.nomes.push(this.nome);
    this.nome= '';
  }
}
