import { IngresoServicio } from './ingreso.servicio';
import { Ingreso } from './ingreso.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  ingresos: Ingreso[] = []
  constructor(private IngresoServicio: IngresoServicio) { }

  ngOnInit(): void {
    this.ingresos = this.IngresoServicio.ingresos;
  }
  eliminarRegistro(ingreso: Ingreso) {
    this.IngresoServicio.eliminar(ingreso);
  }


}
