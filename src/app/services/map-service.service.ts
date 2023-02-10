import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Loader } from '@googlemaps/js-api-loader';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root',
})
export class MapServiceService {
  private map: google.maps.Map;
  public location: {
    lat: number;
    lng: number;
  };

  loader = new Loader({
    apiKey: environment.mapkey,
  });

  constructor() {}

  getCurrentlocation = async () => {
    try {
      const coordinates = await Geolocation.getCurrentPosition({
        timeout: 100000,
        enableHighAccuracy: true,
      });

      this.location = {
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude,
      };
      console.log(this.location);
    } catch (error) {
      console.log(error);
    }
  };

  async createMap() {
    this.loader.load().then(() => {
      console.log('loaded gmaps');

      this.map = new google.maps.Map(document.getElementById('map'), {
        center: this.location,
        zoom: 18,
        mapTypeControl: false,
        mapTypeId: 'satellite',
        disableDefaultUI: true,
      });
    });
  }
}
