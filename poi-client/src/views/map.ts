import { LeafletMap } from '../services/leaflet-map';
import { PointService } from '../services/point-service';
import { inject } from 'aurelia-framework';

@inject(PointService)
export class Map {
  mapId = 'main-map';
  mapHeight = 600;
  map: LeafletMap;

  constructor(private ds: PointService) {}

  renderPoints() {
    for (let point of this.ds.points) {
      const pointStr = `${point.name}`;
      this.map.addMarker(point.location, pointStr);
    }
  }

  attached() {
    const mapConfig = {
      location: { lat: 53.2734, lng: -7.7783203 },
      zoom: 8,
      minZoom: 1
    };
    this.map = new LeafletMap(this.mapId, mapConfig, 'Terrain');
    this.map.showZoomControl();
    this.map.showLayerControl();
    this.renderPoints();
  }
}
