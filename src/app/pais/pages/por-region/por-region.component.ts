import { Component } from '@angular/core';
import { PaisInputComponent } from '../../components/pais-input/pais-input.component';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`button{margin-right: 5px}`
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paiservices: PaisService) { }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    if (region === this.regionActiva) { return; }
    this.regionActiva = region;
    this.paises = [];
    this.buscarRegion(region);
  }

  buscarRegion(region: string) {

    this.paiservices.buscarRegion(this.regionActiva).subscribe(paises =>
      this.paises = paises

    )
  }

}
