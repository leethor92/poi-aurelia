export interface Point {
  name: string;
  details: string;
  member: string;
  category: string;
  location: Location;
  id: ''
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

export interface Location {
  lat: number;
  lng: number;
}
