import { Component } from '@angular/core';

@Component ({
  selector: 'soma-component'
  ,templateUrl: 'soma.component.html'
  ,styleUrls: ['soma.component.css']

})

export class SomaComponent{
  numero1 : number = 0;
  numero2 : number = 0;

  somar(): void{
    let total = Number(this.numero1) + Number(this.numero2);
    alert("A soma dos valores é: " + total);
  }

}
