import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Charger } from 'src/app/interfaces/charger.interfaces';
import { Connector } from 'src/app/interfaces/connector.interface';

@Component({
  selector: 'app-chargers',
  templateUrl: './chargers.component.html',
  styleUrls: ['./chargers.component.scss']
})
export class ChargersComponent implements OnInit {
  public title_content:string = 'Energía total suministrada'
  public chargers:Charger[] = []
  public charger?:Charger
  public connectors: Connector[] = []

  constructor(private dataService: DataService){}

  ngOnInit(){
    this.dataService.chargers.subscribe(charges => this.chargers = charges);
  }

  changeChargers = (id:number) => {
    this.charger = this.chargers.find(charge=> charge.id === id)
    this.dataService.fetchConnectors(id).subscribe(connector => {
      this.connectors = connector
    })
  }
}
