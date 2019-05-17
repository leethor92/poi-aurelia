import {Point} from "../services/point-types";

export class Points {
  pointName: string;
  pointDetails: string;
  points: Point[] = [];

  addPoint() {
    const point = {
      pointName: this.pointName,
      pointDetails: this.pointDetails,
    };
    this.points.push(point);
    console.log(point);
  }
}
