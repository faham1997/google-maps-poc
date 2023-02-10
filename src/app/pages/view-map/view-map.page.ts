import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MapServiceService } from 'src/app/services/map-service.service';

@Component({
  selector: 'app-view-map',
  templateUrl: './view-map.page.html',
  styleUrls: ['./view-map.page.scss'],
})
export class ViewMapPage implements OnInit {
  constructor(public mapService: MapServiceService, public router: Router) {}

  ngOnInit() {
    console.log(this.mapService.location);
    this.mapService.createMap();
  }
  handleDismissMap = async () => {
    // await this.mapService.destroyMap();
    this.router.navigate(['/home']);
  };
}
