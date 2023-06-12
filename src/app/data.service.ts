import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assets } from './interfaces/assets.interfaces';
import { Observable } from 'rxjs';
import { Station } from './interfaces/station.interfaces';

const URL_API = 'https://my-json-server.typicode.com/AlvaroArratia/static-api';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  fetchAssets():Observable<Assets[]> {
    return this.http.get<Assets[]>(`${URL_API}/assets`);
  }

  fetchStations(id_assts:number) {
    const params = new HttpParams()
    .set('assetId', id_assts);

    return this.http.get<Station[]>(`${URL_API}/stations`, { params })
  }

  /* fetchChargers() = (params) => {
    return axios.get(`${URL_API}/chargers`, { params })
  } */
}
