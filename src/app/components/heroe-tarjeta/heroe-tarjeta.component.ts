import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() id: number;

  @Output() heroeSeleccionado: EventEmitter<any>;

  constructor(private _router: Router ) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }
  
  verHeroe(){
    this.heroeSeleccionado.emit( this.heroe );
  }
}
