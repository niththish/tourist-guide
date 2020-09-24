import { Component, OnInit } from '@angular/core';
import {stateSchema} from '../../shared/states';
import {StatesService} from '../service/states.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private statesService:StatesService) { }
  states:stateSchema[];

  ngOnInit(): void {
      this.statesService.getStates().subscribe( state => this.states=state);
      console.log(this.states);
      
  }

}
