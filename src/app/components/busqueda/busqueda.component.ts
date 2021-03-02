import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes-service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor(private _activatedRoute: ActivatedRoute,
              private _router        : Router,
              private _heroesService : HeroesService) {
    this._activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroe(this.termino);
    });
  }

  ngOnInit(): void {
  }

  verHeroe( heroe: Heroe ){
    this._router.navigate(['/heroe', this._heroesService.getHeroePorNombre(heroe.nombre)]);
  }

}
