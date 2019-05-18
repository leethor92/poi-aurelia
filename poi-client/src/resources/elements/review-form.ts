import { bindable } from 'aurelia-framework';
import { Review, Point } from '../../services/point-types';

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

  addReview() {
    const review = {
      reviewName: this.reviewName,
      reviewDetails: this.reviewDetails,
      rating: this.selectedType,
      point: this.selectedPoint
    }
    this.reviews.push(review);
    console.log(this.reviews);
  }
}
