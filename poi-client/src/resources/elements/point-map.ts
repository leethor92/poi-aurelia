import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { LeafletMap } from '../../services/leaflet-map';
import { UpdateMap } from '../../services/messages';
import { Point } from '../../services/point-types';

@inject(EventAggregator)
export class PointMap {
  mapId = 'points-map';
  mapHeight = 300;
  map: LeafletMap;

  constructor(private ea: EventAggregator) {
    ea.subscribe(UpdateMap, msg => {
      this.renderPoint(msg.point);
    });
  }

  renderPoint(point: Point) {
    if (this.map) {
      const pointStr =`${point.name}`;
      this.map.addMarker(point.location, pointStr);
      this.map.moveTo(12, point.location);
    }
  }

  attached() {
    const mapConfig = {
      location: { lat: 53.2734, lng: -7.7783203 },
      zoom: 8,
      minZoom: 7
    };
    this.map = new LeafletMap(this.mapId, mapConfig, 'Terrain');
    this.map.showZoomControl();
  }
}
