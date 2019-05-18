import {Point} from "../services/point-types";
import { inject } from 'aurelia-framework';
import { PointService} from "../services/point-service";

@inject(PointService)
export class Points {
  points: Point[] = [];
  categoryTypes = ['North','South','East','West'];

  constructor(private ds: PointService) {
    this.points = ds.points;
    this.categoryTypes = ds.categoryTypes;
  }
}
