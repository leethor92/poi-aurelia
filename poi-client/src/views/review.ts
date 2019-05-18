import { inject } from 'aurelia-framework';
import {Point} from "../services/point-types";
import {PointService} from "../services/point-service";

@inject(PointService)
export class Review {
  reviews: Review [] = [];
  ratingTypes = ['Bad','Ok','Good'];
  points: Point[];

  constructor(private ds: PointService) {
    this.points = ds.points;
  }
}



