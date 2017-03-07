import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  
  constructor() { }

  ngOnInit() {
        // let result = http.get("https://maps.googleapis.com/maps/api/js?key=&callback=initMap")
  }

}
