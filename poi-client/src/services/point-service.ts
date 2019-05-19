import {Point, Review, User} from "./point-types";
import { HttpClient } from 'aurelia-http-client';
import { inject, Aurelia } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';
import { EventAggregator } from 'aurelia-event-aggregator';


@inject(HttpClient, Aurelia, Router, EventAggregator)
export class PointService {
  users: Map <string, User> = new Map();
  points : Point[] = [];
  categoryTypes = ['North','South','East','West'];
  reviews: Review [] = [];
  ratingTypes = ['Bad','Ok','Good'];

  constructor(private httpClient: HttpClient, private au: Aurelia, private router: Router, private ea: EventAggregator) {
    httpClient.configure(http => {
      http.withBaseUrl('https://DESKTOP-TMDJO97:3000');
    });
    this.getPoints();
    this.getUsers();
  }

  async getPoints() {
    const response = await this.httpClient.get('/api/points');
    this.points = await response.content;
    console.log (this.points);
  }

  async getUsers() {
    const response = await this.httpClient.get('/api/users');
    const users = await response.content;
    users.forEach(user => {
      this.users.set(user.email, user);
    });
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

  signup(firstName: string, lastName: string, email: string, password: string) {
    this.changeRouter(PLATFORM.moduleName('app'))
    return false;
  }

  async login(email: string, password: string) {
    const user = this.users.get(email);
    if (user && (user.password === password)) {
      this.changeRouter(PLATFORM.moduleName('app'))
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.changeRouter(PLATFORM.moduleName('start'))
  }

  changeRouter(module:string) {
    this.router.navigate('/', { replace: true, trigger: false });
    this.router.reset();
    this.au.setRoot(PLATFORM.moduleName(module));
  }

}
