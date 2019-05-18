import {Point} from "../services/point-types";
import { inject } from 'aurelia-framework';
import { PointService} from "../services/point-service";

@inject(PointService)
export class Points {
  points: Point[] = [];

  constructor(private ds: PointService) {
    this.points = ds.points;
  }
}
