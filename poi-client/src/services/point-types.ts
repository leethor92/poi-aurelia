export interface Point {
  name: string;
  details: string;
  category: string;
  location: Location;
  _id: string;
}

export interface Review {
  reviewName: string;
  reviewDetails: string;
  rating: string;
  point: Point;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  _id: string;
}

export interface RawReview {
  reviewName: string;
  reviewDetails: string;
  rating: string;
  point: string;
  member: string;
}

export interface Location {
  lat: number;
  lng: number;
}
