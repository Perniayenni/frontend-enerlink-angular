import { Component } from '@angular/core';

interface MiObjeto {
  id: number;
  name: string;
  icon: string
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
  public items:Array<MiObjeto> = [
    { id: 1, name: 'Inicio', icon: 'home' },
    { id: 2, name: 'Consumo', icon: 'lightbulb' },
    { id: 3, name: 'Informes', icon: 'bar_chart' },
    { id: 4, name: 'Configuraciones', icon: 'settings' }
  ]
}
