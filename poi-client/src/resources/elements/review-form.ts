import { bindable } from 'aurelia-framework';
import { Review, Point } from '../../services/point-types';
import { inject } from 'aurelia-framework';
import {PointService} from "../../services/point-service";

@inject(PointService)
export class ReviewForm {
  reviewName: string;
  reviewDetails: string;
  @bindable
  reviews: Review[];
  @bindable
  ratingTypes: string [];

  @bindable
  points: Point[];

  selectedType = '';
  selectedPoint: Point = null;

  constructor (private ds: PointService) {}

  addReview() {
    this.ds.review(this.reviewName, this.reviewDetails, this.selectedType, this.selectedPoint)
  }
}
