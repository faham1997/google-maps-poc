import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MapServiceService } from '../services/map-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  mal: any;
  constructor(private router: Router, private mapService: MapServiceService) {}
  handleLocation() {
    this.mal = navigator.geolocation.getCurrentPosition(
      this.success,
      this.error,
      this.options
    );
  }

  success(pos) {
    console.log(pos);
  }
  error(err) {}
  async viewLocations() {
    await this.mapService.getCurrentlocation();
    if (this.mapService.location.lat && this.mapService.location.lng) {
      this.router.navigate(['/view-map']);
    }
  }
}
