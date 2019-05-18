import { bindable } from 'aurelia-framework';
import { Review } from '../../services/point-types';

export class ReviewForm {
  reviewName: string;
  reviewDetails: string;
  @bindable
  reviews: Review[];
  @bindable
  ratingTypes: string [];

  selectedType = '';

  addReview() {
    const review = {
      reviewName: this.reviewName,
      reviewDetails: this.reviewDetails,
      rating: this.selectedType
    }
    this.reviews.push(review);
    console.log(this.reviews);
  }
}
