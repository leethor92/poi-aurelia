import {Point, Review} from "./point-types";
import { HttpClient } from 'aurelia-http-client';
import { inject } from 'aurelia-framework';

@inject(HttpClient)
export class PointService {
  points : Point[] = [];
  categoryTypes = ['North','South','East','West'];
  reviews: Review [] = [];
  ratingTypes = ['Bad','Ok','Good'];

  constructor(private httpClient: HttpClient) {
    httpClient.configure(http => {
      http.withBaseUrl('http://localhost:8080');
    });
    this.getPoints();
  }

  async getPoints() {
    const response = await this.httpClient.get('/api/points.json');
    this.points = await response.content;
    console.log (this.points);
  }

  async review(reviewName: string, reviewDetails: string, rating: string, point: Point) {
    const review = {
      reviewName: reviewName,
      reviewDetails: reviewDetails,
      rating: rating,
      point: point
    };
    this.reviews.push(review);
  }
}
