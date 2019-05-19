export interface Point {
  name: string;
  details: string;
  category: string;
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
}
