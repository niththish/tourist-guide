import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import {StatewiseService} from '../service/statewise.service';

@Component({
  selector: 'app-maindetail',
  templateUrl: './maindetail.component.html',
  styleUrls: ['./maindetail.component.css']
})
export class MaindetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,private StatewiseService:StatewiseService) { }
  places;

  ngOnInit(): void {
    const id = this.route.snapshot.params['name'];
    this.StatewiseService.getPlaces(id).subscribe( place => this.places=place[0]);
    console.log(this.places);
    
  }
  
}