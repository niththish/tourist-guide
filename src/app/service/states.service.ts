import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {states,stateSchema} from '../../shared/states';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor() { }

  getStates():Observable<stateSchema[]>{
    return of(states);
  }
}
