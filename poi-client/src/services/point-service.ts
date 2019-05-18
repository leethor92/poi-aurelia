import {Point, Review} from "./point-types";

export class PointService {
  points : Point[] = [];
  categoryTypes = ['North','South','East','West'];
  reviews: Review [] = [];
  ratingTypes = ['Bad','Ok','Good'];
}
