import { bindable } from 'aurelia-framework';
import { Point } from '../../services/point-types';

export class PointForm {
  name: string;
  details: string;
  @bindable
  points: Point[];
  @bindable
  categoryTypes: string[];

  selectedCategory = '';

  addPoint() {
    const point = {
      name: this.name,
      details: this.details,
      category: this.selectedCategory
    };
    this.points.push(point);
    console.log(this.points);
  }
}
