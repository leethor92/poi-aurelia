export interface Point {
  pointName: string;
  pointDetails: string;
}

export interface Review {
  reviewName: string;
  reviewDetails: string;
  rating: string;
  point: Point;
}