import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculadora';
  opA = 0;
  opB = 0;
  resultado = 0;
  sum(){
    this.resultado = this.opA + this.opB;
  }

}
