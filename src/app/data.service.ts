import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assets } from './interfaces/assets.interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import { Station } from './interfaces/station.interfaces';
import { Charger } from './interfaces/charger.interfaces';
import { Connector } from './interfaces/connector.interface';

const URL_API = 'https://my-json-server.typicode.com/AlvaroArratia/static-api';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private chargersSubject = new BehaviorSubject<Charger[]>([]);
  public chargers = this.chargersSubject

  constructor(private http: HttpClient) { }

  fetchAssets = ():Observable<Assets[]> => {
    return this.http.get<Assets[]>(`${URL_API}/assets`);
  }

  fetchStations = (id_assts:number) => {
    const params = new HttpParams()
    .set('assetId', id_assts);

    return this.http.get<Station[]>(`${URL_API}/stations`, { params })
  }

  fetchChargers = (station_id:number) => {
    const params = new HttpParams()
    .set('stationId', station_id);

    this.http.get<Charger[]>(`${URL_API}/chargers`, { params }).subscribe(response => {
      this.chargers.next(response)
    })
  }

  fetchConnectors = (charger_id:number) => {
    const params = new HttpParams()
    .set('chargerId', charger_id);

    return this.http.get<Connector[]>(`${URL_API}/connectors`, { params })
  }

}
