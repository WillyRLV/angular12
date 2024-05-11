import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor() { }


  disabling = true;
  titulo = ''

  modificarTitulo(event:Event){
    this.titulo = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {
  }

}
