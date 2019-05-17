export class Review {
  reviewName: string;
  reviewDetails: string;
  reviews: any [] = [];

  addReview() {
    const review = {
      reviewName: this.reviewName,
      reviewDetails: this.reviewDetails
    };
    this.reviews.push(review);
    console.log(review);
  }
}


