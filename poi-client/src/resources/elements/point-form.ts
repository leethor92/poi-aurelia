import { bindable } from 'aurelia-framework';
import { Point } from '../../services/point-types';

export class PointForm {
  pointName: string;
  pointDetails: string;
  @bindable
  points: Point[];

  addPoint() {
    const point = {
      pointName: this.pointName,
      pointDetails: this.pointDetails,
    };
    this.points.push(point);
    console.log(point);
  }
}
