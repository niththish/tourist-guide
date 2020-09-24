import { Injectable } from '@angular/core';
import {statewise} from '../../shared/statewise';
import {Observable,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatewiseService {

  constructor() { }
  getPlaces(id):Observable<any[]>{
    return of (statewise.filter( (place)=>{
      if (place.name===id){
        return place;
      }
    } ));
  }
}
