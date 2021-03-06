import { Component, OnInit } from '@angular/core';
import { OfertasService } from './../ofertas.service';
import { Oferta } from './../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {
  public ofertas: Oferta[];

  constructor(private ofertasService: OfertasService) {}

  ngOnInit() {
    this.ofertasService
      .getOfertas2()
      .then((ofertas: Oferta[]) => {
        console.log('a funcao foi resolvida 3s');
        this.ofertas = ofertas;
      })
      .catch((param: any) => {
        console.log(param);
      });
    console.log(this.ofertas);
  }
}
