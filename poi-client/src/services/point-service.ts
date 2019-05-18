import {Point, Review} from "./point-types";

export class PointService {
  points : Point[] = [];
  reviews: Review [] = [];
  ratingTypes = ['Bad','Ok','Good'];
}
