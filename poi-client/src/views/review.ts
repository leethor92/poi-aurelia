import { inject } from 'aurelia-framework';
import {Point, Review} from "../services/point-types";
import {PointService} from "../services/point-service";

@inject(PointService)
export class Reviews {
  reviews: Review [] = [];
  ratingTypes = ['Bad','Ok','Good'];
  points: Point[];

  constructor(private ds: PointService) {
    this.points = ds.points;
    this.reviews = ds.reviews;
    this.ratingTypes = ds.ratingTypes;
  }
}



