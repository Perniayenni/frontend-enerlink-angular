import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Assets } from 'src/app/interfaces/assets.interfaces';
import { Station } from 'src/app/interfaces/station.interfaces';


@Component({
  selector: 'app-station-energy',
  templateUrl: './station-energy.component.html',
  styleUrls: ['./station-energy.component.scss']
})
export class StationEnergyComponent implements OnInit {

  public assets: Assets[] = []
  public title_content: string = 'Energía total estación'
  public stations: Station[] =[]
  public station?: Station

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.dataService.fetchAssets().subscribe(assets =>{
      this.assets = assets
    })
  }

  changeAsset = (id:number) => {
    this.dataService.fetchStations(id).subscribe(stations =>{
      this.stations = stations
    })
  };

  selectStation = (id:number) => {
    this.station = this.stations.find(station=> station.id === id)
    this.dataService.fetchChargers(id)
  }
}
