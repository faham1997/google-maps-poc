import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Loader } from '@googlemaps/js-api-loader';

@Injectable({
  providedIn: 'root',
})
export class MapServiceService {
  private map: google.maps.Map;

  loader = new Loader({
    apiKey: environment.mapkey,
  });

  constructor() {}

  createMap() {
    this.loader.load().then(() => {
      console.log('loaded gmaps');

      const location = { lat: 51.233334, lng: 6.783333 };

      this.map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 6,
        mapTypeControl: false,
        mapTypeId: 'satellite',
        disableDefaultUI: true,
      });
    });
  }
}
