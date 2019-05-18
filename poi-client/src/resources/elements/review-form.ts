import { bindable } from 'aurelia-framework';
import { Review } from '../../services/point-types';

export class ReviewForm {
  reviewName: string;
  reviewDetails: string;
  @bindable
  reviews: Review[];

  addReview() {
    const review = {
      reviewName: this.reviewName,
      reviewDetails: this.reviewDetails
    }
    this.reviews.push(review);
    console.log(review);
  }
}
