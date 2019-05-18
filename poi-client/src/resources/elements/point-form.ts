import { bindable } from 'aurelia-framework';
import { Point } from '../../services/point-types';

export class PointForm {
  pointName: string;
  pointDetails: string;
  @bindable
  points: Point[];
  @bindable
  categoryTypes: string[];

  selectedCategory = '';

  addPoint() {
    const point = {
      pointName: this.pointName,
      pointDetails: this.pointDetails,
      category: this.selectedCategory
    };
    this.points.push(point);
    console.log(this.points);
  }
}
