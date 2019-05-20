import { bindable } from 'aurelia-framework';
import { Point, Location } from '../../services/point-types';
import { inject, Aurelia } from 'aurelia-framework';
import { PointService } from '../../services/point-service';

@inject(PointService)
export class PointForm {
  name: string;
  details: string;
  @bindable
  points: Point[];
  @bindable
  categoryTypes: string[];

  selectedCategory = '';

  location: Location = { lat: 53.2734, lng: -7.7783203 };

  constructor(private ds: PointService) {}

  addPoint() {
    this.ds.createPoint(this.name, this.details, this.selectedCategory, this.location);
  }
}
