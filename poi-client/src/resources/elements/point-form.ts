import { bindable } from 'aurelia-framework';
import { Point } from '../../services/point-types';
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

  constructor(private ds: PointService) {}

  addPoint() {
    this.ds.createPoint(this.name, this.details, this.selectedCategory);
  }
}
