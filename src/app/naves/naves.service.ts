import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Naves } from './naves';

import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NavesService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getNavess(): Observable<Naves[]> {
    return this.http.get<Naves[]>(this.apiUrl);
  }

  getNavesImperio(navees: Naves[]): number {
    let sum: number = 0;
    navees.forEach((nave) => {
      if (nave.bando === "Imperio") {
          sum += 1;}

    });

    return sum;
  }
  getNavesRebelion(navees: Naves[]): number {
    let sum: number = 0;
    navees.forEach((nave) => {
      if (nave.bando === "Rebelión") {
          sum += 1;}

    });

    return sum;
  }
  getNavesNeutrales(navees: Naves[]): number {
    let sum: number = 0;
    navees.forEach((nave) => {
      if (nave.bando === "Neutral") {
          sum += 1;}

    });

    return sum;
  }
}