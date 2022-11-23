import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "joão";
  dataNascimento = "1995-10-31";
  urlImagem = "/assets/joao.jpg";

  mostrarDataNascimento(){
    alert(`A data de nascimento do João é: ${this.dataNascimento}`)
  }

}
